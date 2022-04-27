import { numberOfLeaves, longestPathEdgeCount, areTreesEqual, BinaryTree } from './tree'

/**
 * generates BinaryTree
 * @param numberOfLevels height of generated BinaryTree
 * @returns the root of generated BinaryTree
 */
function generateBinaryTree(numberOfLevels: number): BinaryTree<number> {
  //inner recursive function that generates new nodes
  function innerGeneration(numberOfLevels: number, node: BinaryTree<number>): void {
    //end recursion when numberOfLevels reaches 0
    if(numberOfLevels == 0){
      return
    }
    //set values of left child
    node.left = {
      value: Math.floor(Math.random() * 10)
    }
    //set values of right child
    node.right = {
      value: Math.floor(Math.random() * 10)
    }
    //recursive call on left child
    innerGeneration(numberOfLevels - 1, node.left)
    //recursive call on right child
    innerGeneration(numberOfLevels - 1, node.right)
  }
  //create root
  const root: BinaryTree<number> = {
    value: Math.floor(Math.random() * 10)
  }
  //begin generation
  innerGeneration(numberOfLevels, root)
  //return root node
  return root
}

describe('numberOfLeaves', () => {
  describe('performance', () => {
    it('checks if calling function on a 5 level tree takes less than 0.5 milisecond', () => {
      const tree: BinaryTree<number> = generateBinaryTree(5)
      const start = performance.now()
      numberOfLeaves(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(0.5)
    })
    it('checks if calling function on a 10 level tree takes less than 1 milisecond', () => {
      const tree: BinaryTree<number> = generateBinaryTree(10)
      const start = performance.now()
      numberOfLeaves(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(1)
    })
    it('checks if calling function on a 20 level tree takes less than 100 miliseconds', () => {
      const tree: BinaryTree<number> = generateBinaryTree(20)
      const start = performance.now()
      numberOfLeaves(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(100)
    })
  })
  describe('corectness', () => {
    it('checks if calling function on a tree with one node returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0
      }
      expect(numberOfLeaves(tree)).toBe(1)
    })
    it('checks if calling function on a tree with root and left child returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1
        }
      }
      expect(numberOfLeaves(tree)).toBe(1)
    })
    it('checks if calling function on a tree with root and right child returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        right: {
          value: 2
        }
      }
      expect(numberOfLeaves(tree)).toBe(1)
    })
    it('checks if calling function on a tree with root and two children returns 2', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1
        },
        right: {
          value: 2
        }
      }
      expect(numberOfLeaves(tree)).toBe(2)
    })
    it('checks if calling function on a 5 level tree returns 32 (2^5)', () => {
      const tree: BinaryTree<number> = generateBinaryTree(5)
      expect(numberOfLeaves(tree)).toBe(32)
    })
    it('checks if calling function on a 10 level tree returns 1024 (2^10)', () => {
      const tree: BinaryTree<number> = generateBinaryTree(10)
      expect(numberOfLeaves(tree)).toBe(1024)
    })
    it('checks if calling function on an asymetric tree with 5 leaves returns 5', () => {
      const tree: BinaryTree<number> = {
        value: 5,
        left: {
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
      expect(numberOfLeaves(tree)).toBe(5)
    })
  })
})

describe('longestPathEdgeCount', () => {
  describe('performance', () => {
    it('checks if calling function on a 5 level tree takes less than 0.5 miliseconds', () => {
      const tree: BinaryTree<number> = generateBinaryTree(5)
      const start = performance.now()
      longestPathEdgeCount(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(0.5)
    })
    it('checks if calling function on a 10 level tree takes less than 1 milisecond', () => {
      const tree: BinaryTree<number> = generateBinaryTree(10)
      const start = performance.now()
      longestPathEdgeCount(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(1)
    })
    it('checks if calling function on a 20 level tree takes less than 100 miliseconds', () => {
      const tree: BinaryTree<number> = generateBinaryTree(20)
      const start = performance.now()
      longestPathEdgeCount(tree)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(100)
    })
  })
  describe('corectness', () => {
    it('checks if calling function on a tree with one node returns 0', () => {
      const tree: BinaryTree<number> = {
        value: 0
      }
      expect(longestPathEdgeCount(tree)).toBe(0)
    })
    it('checks if calling function on a tree with root and left child returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1
        }
      }
      expect(longestPathEdgeCount(tree)).toBe(1)
    })
    it('checks if calling function on a tree with root and right child returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        right: {
          value: 2
        }
      }
      expect(longestPathEdgeCount(tree)).toBe(1)
    })
    it('checks if calling function on a tree with root and two children returns 1', () => {
      const tree: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1
        },
        right: {
          value: 2
        }
      }
      expect(longestPathEdgeCount(tree)).toBe(1)
    })
    it('checks if calling function on a 5 level tree returns 5', () => {
      const tree: BinaryTree<number> = generateBinaryTree(5)
      expect(longestPathEdgeCount(tree)).toBe(5)
    })
    it('checks if calling function on a 10 level tree returns 10', () => {
      const tree: BinaryTree<number> = generateBinaryTree(10)
      expect(longestPathEdgeCount(tree)).toBe(10)
    })
    it('checks if calling function on an asymetric tree with longest path from root to leaf equal to 4 returns 4', () => {
      const tree: BinaryTree<number> = {
        value: 5,
        left: {
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
      expect(longestPathEdgeCount(tree)).toBe(4)
    })
  })
})

describe('areTreesEqual', () => {
  describe('performance', () => {
    it('checks if comparing two 5 level trees takes less than 0.5 milisecond', () => {
      const tree1: BinaryTree<number> = generateBinaryTree(5)
      const tree2: BinaryTree<number> = generateBinaryTree(5)
      const start = performance.now()
      areTreesEqual(tree1, tree2)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(0.5)
    })
    it('checks if comparing two 10 level trees takes less than 1 milisecond', () => {
      const tree1: BinaryTree<number> = generateBinaryTree(10)
      const tree2: BinaryTree<number> = generateBinaryTree(10)
      const start = performance.now()
      areTreesEqual(tree1, tree2)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(1)
    })
    it('checks if comparing two 20 level trees takes less than 100 miliseconds', () => {
      const tree1: BinaryTree<number> = generateBinaryTree(20)
      const tree2: BinaryTree<number> = generateBinaryTree(20)
      const start = performance.now()
      areTreesEqual(tree1, tree2)
      const finish = performance.now()
      expect(finish - start).toBeLessThan(100)
    })
  })
  describe('corectness', () => {
    it('checks if comparing trees with different values on the first level returns false', () => {
      const tree1: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }

      const tree2: BinaryTree<number> = {
        value: 1,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }
      expect(areTreesEqual(tree1, tree2)).toBe(false)
    })
    it('checks if comparing trees with different values on the second level returns false', () => {
      const tree1: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }

      const tree2: BinaryTree<number> = {
        value: 0,
        left: {
          value: 2,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 4,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }
      expect(areTreesEqual(tree1, tree2)).toBe(false)
    })
    it('checks if comparing trees with different values on the third level returns false', () => {
      const tree1: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }

      const tree2: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 2
          },
          right: {
            value: 1
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }
      expect(areTreesEqual(tree1, tree2)).toBe(false)
    })
    it('checks if comparing trees with the same values and structure returns true', () => {
      const tree1: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }

      const tree2: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }
      expect(areTreesEqual(tree1, tree2)).toBe(true)
    })
    it('checks if comparing trees with different structure returns false', () => {
      const tree1: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1,
          left: {
            value: 3
          },
          right: {
            value: 4
          }
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }

      const tree2: BinaryTree<number> = {
        value: 0,
        left: {
          value: 1
        },
        right: {
          value: 2,
          left: {
            value: 5
          },
          right: {
            value: 6
          }
        }
      }
      expect(areTreesEqual(tree1, tree2)).toBe(false)
    })
  })
})