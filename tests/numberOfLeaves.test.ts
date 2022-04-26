import { numberOfLeaves } from "../src/functions";
import { Tree } from "../src/types";


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