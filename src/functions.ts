import { Tree, TreeModified } from "./types"

//return number of nodes that do not have children
export function numberOfLeaves<TType>(tree: TreeModified<TType>): number {

  if(tree === undefined) return 0
  if(tree.left === undefined && tree.right === undefined) return 1

  return numberOfLeaves(tree.left) + numberOfLeaves(tree.right)
}

//return the number of edges that form the longest path from root to any leaf
export function longestPathEdgeCount<TType>(tree: Tree<TType>): number {

  function iterate<TType>(tree: Tree<TType>, counter: number): number {

    const leftValue = tree.left === undefined ? counter : iterate(tree.left, counter + 1)
    const rightValue = tree.right === undefined ? counter : iterate(tree.right, counter + 1)

    return leftValue > rightValue ? leftValue : rightValue
  }

  return iterate(tree, 0)
}

//compare two trees
export function areTreesEqual<TType>(tree1: TreeModified<TType>, tree2: TreeModified<TType>): boolean {

  if(tree1?.value !== tree2?.value) return false
  if(tree1 === undefined && tree2 === undefined) return true
  
  return areTreesEqual(tree1?.left, tree2?.left) && areTreesEqual(tree1?.right, tree2?.right)
}