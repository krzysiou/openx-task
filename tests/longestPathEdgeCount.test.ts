import { longestPathEdgeCount } from "../src/functions";
import { Tree } from "../src/types";

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