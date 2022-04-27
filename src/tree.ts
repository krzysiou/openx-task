// type that defines tree structure
export type BinaryTree<TType> = {
  value: TType,
  left?: BinaryTree<TType>
  right?: BinaryTree<TType>,
}

/**
 * counts number of leaf nodes in binary tree
 * @param tree an instance of BinaryTree
 * @returns number of leaf nodes of a binary tree
 */
export function numberOfLeaves<TType>(tree: BinaryTree<TType>): number {
  // inner recursive function that checks if present node should be counted as a leaf
  function internalCheckAmount<TType>(tree: BinaryTree<TType> | undefined): number {
    // if node does not exist, do not count it
    if(tree === undefined) {
      return 0
    }
    // if node has no descendants count it as a leaf
    if(tree.left === undefined && tree.right === undefined) {
      return 1
    }
    // check if descendant nodes are leaves and count them
    return internalCheckAmount(tree.left) + internalCheckAmount(tree.right)
  }
  // iterate over the tree using DFS
  return internalCheckAmount(tree)
}

/**
 * counts length of the longest path from root to any leaf
 * @param tree an instance of BinaryTree
 * @returns the number of edges of the longest path from root to any leaf
 */
export function longestPathEdgeCount<TType>(tree: BinaryTree<TType>): number {
  // inner recursive function that calculates distance between present node and root
  function internalCheckLength<TType>(tree: BinaryTree<TType>, counter: number): number {
    // check length in left sub-tree
    const leftValue = tree.left === undefined ? counter : internalCheckLength(tree.left, counter + 1)
    // check length in right sub-tree
    const rightValue = tree.right === undefined ? counter : internalCheckLength(tree.right, counter + 1)
    // return length of the longest path of both sub-trees
    return leftValue > rightValue ? leftValue : rightValue
  }
  // iterate over the tree using DFS
  return internalCheckLength(tree, 0)
}

/**
 * compares two binary trees and checks for deep equality
 * @param tree1 an instance of BinaryTree
 * @param tree2 an instance of BinaryTree
 * @returns boolean indicating deep equality of trees
 */
export function areTreesEqual<TType>(tree1: BinaryTree<TType>, tree2: BinaryTree<TType>): boolean {
  // inner recursive function that checks if nodes in both trees are equal
  function internalCheckEquality<TType>(tree1: BinaryTree<TType> | undefined, tree2: BinaryTree<TType> | undefined): boolean {
    // check if values or structures are different
    if(tree1?.value !== tree2?.value) {
      return false
    }
    // allow case when both nodes do not exist
    if(tree1 === undefined && tree2 === undefined) {
      return true
    }
    // check equality in both children of node
    return internalCheckEquality(tree1?.left, tree2?.left) && internalCheckEquality(tree1?.right, tree2?.right)
  }
  // iterate over the tree using DFS
  return internalCheckEquality(tree1, tree2)
}