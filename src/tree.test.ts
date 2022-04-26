import { areTreesEqual, numberOfLeaves, longestPathEdgeCount } from "./tree"
import { Tree } from "./types"

test('check if two trees are equal when values and structure are the same', () => {
  const tree1: Tree<number> = {
    value: 5,
  }

  const tree2: Tree<number> = {
    value: 5,
  }
  expect(areTreesEqual(tree1, tree2)).toBe(true);
});

test('check if two trees are equal when values are different but structure is the same', () => {
  const tree1: Tree<number> = {
    value: 5,
    left: {
      value: 1
    }
  }

  const tree2: Tree<number> = {
    value: 3,
    left: {
      value: 1
    }
  }
  expect(areTreesEqual(tree1, tree2)).toBe(false);
});

test('check if two trees are equal when values are the same but structure is different', () => {
  const tree1: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7
    }
  }
  const tree2: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7,
      left: {
        value: 4
      }
    },
  }
  expect(areTreesEqual(tree1, tree2)).toBe(false);
});

test('check if two trees are equal when values and structure are different', () => {
  const tree1: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7,
      left: {
        value: 1
      }
    }
  }

  const tree2: Tree<number> = {
    value: 3,
    left: {
      value: 1
    }
  }
  expect(areTreesEqual(tree1, tree2)).toBe(false);
});

test('check if two trees are equal, complex test', () => {
  const tree1: Tree<number> = {
    value: 5,
    left:{
      value: 3,
      left: {
        value: 2
      },
      right: {
        value: 5
      }
    },
    right: {
      value: 7,
      left: {
        value: 1
      },
      right: {
        value: 0,
        left: {
          value: 2
        },
        right: {
          value: 8,
          right: {
            value: 5
          }
        }
      }
    }
  }

  const tree2: Tree<number> = {
    value: 5,
    left:{
      value: 3,
      left: {
        value: 2
      },
      right: {
        value: 5
      }
    },
    right: {
      value: 7,
      left: {
        value: 1
      },
      right: {
        value: 0,
        left: {
          value: 2
        },
        right: {
          value: 8,
          right: {
            value: 5
          }
        }
      }
    }
  }

  const tree3: Tree<number> = {
    value: 5,
    left:{
      value: 2,
      left: {
        value: 4
      }
    },
    right: {
      value: 3,
      left: {
        value: 1
      },
      right: {
        value: 1,
        right: {
          value: 7,
          right: {
            value: 5
          }
        }
      }
    }
  }
  expect(areTreesEqual(tree1, tree2)).toBe(true);
  expect(areTreesEqual(tree1, tree3)).toBe(false);
});

test('compute tree with longest path of 0 edges', () => {
  const tree: Tree<number> = {
    value: 5,
  }
  expect(longestPathEdgeCount(tree)).toBe(0);
});

test('compute tree with longest path of 1 edges', () => {
  const tree: Tree<number> = {
    value: 5,
    left: {
      value: 1
    }
  }
  expect(longestPathEdgeCount(tree)).toBe(1);
});

test('compute tree with longest path of 1 edges', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7
    }
  }
  expect(longestPathEdgeCount(tree)).toBe(1);
});

test('compute tree with longest path of 2 edges', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7,
      left: {
        value: 1
      }
    }
  }
  expect(longestPathEdgeCount(tree)).toBe(2);
});

test('compute tree with longest path of 4 edges', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3,
      left: {
        value: 2
      },
      right: {
        value: 5
      }
    },
    right: {
      value: 7,
      left: {
        value: 1
      },
      right: {
        value: 0,
        left: {
          value: 2
        },
        right: {
          value: 8,
          right: {
            value: 5
          }
        }
      }
    }
  }
  expect(longestPathEdgeCount(tree)).toBe(4);
});

test('compute a tree with 2 leaves', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7
    }
  }
  expect(numberOfLeaves(tree)).toBe(2);
});

test('compute a single node tree', () => {
  const tree: Tree<number> = {
    value: 5,
  }
  expect(numberOfLeaves(tree)).toBe(1);
});

test('compute a tree with 1 leaf', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3
    }
  }
  expect(numberOfLeaves(tree)).toBe(1);
});

test('compute a tree with 5 leaves', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3,
      left: {
        value: 2
      },
      right: {
        value: 5
      }
    },
    right: {
      value: 7,
      left: {
        value: 1
      },
      right: {
        value: 0,
        left: {
          value: 2
        },
        right: {
          value: 8,
          right: {
            value: 5
          }
        }
      }
    }
  }
  expect(numberOfLeaves(tree)).toBe(5);
});

test('compute a tree with 2 leaves', () => {
  const tree: Tree<number> = {
    value: 5,
    left:{
      value: 3
    },
    right:{
      value: 7,
      left: {
        value: 1
      }
    }
  }  
  expect(numberOfLeaves(tree)).toBe(2);
});