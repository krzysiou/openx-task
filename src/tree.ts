//type that defines tree structure
export type Tree<TType> = {
  value: TType,
  left?: Tree<TType>
  right?: Tree<TType>,
}

//return number of leaves
export function numberOfLeaves<TType>(tree: Tree<TType>): number {
    //inner recursive function that checks if present node should be counted as a leaf
    function internalCheckAmount<TType>(tree: Tree<TType> | undefined): number {
        //if node does not exist, do not count it
        if(tree === undefined) {
            return 0
        }
        //if node is a leaf, count it
        if(tree.left === undefined && tree.right === undefined) {
            return 1
        }
        //check if child nodes are leaves and count them
        return internalCheckAmount(tree.left) + internalCheckAmount(tree.right)
    }
    //run recursive function
    return internalCheckAmount(tree)
}

//return the number of edges that form the longest path from root to any leaf
export function longestPathEdgeCount<TType>(tree: Tree<TType>): number {
    //inner recursive function that calculates distance between present node and root
    function internalCheckLength<TType>(tree: Tree<TType>, counter: number): number {
        //check length in left sub-tree
        const leftValue = tree.left === undefined ? counter : internalCheckLength(tree.left, counter + 1)
        //check length in right sub-tree
        const rightValue = tree.right === undefined ? counter : internalCheckLength(tree.right, counter + 1)
        //return length of the longest path of both sub-trees
        return leftValue > rightValue ? leftValue : rightValue
    }
    //run recursive function
    return internalCheckLength(tree, 0)
}

//compare two trees
export function areTreesEqual<TType>(tree1: Tree<TType>, tree2: Tree<TType>): boolean {
    //inner recursive function that checks if nodes in both trees are equal
    function internalCheckEquality<TType>(tree1: Tree<TType> | undefined, tree2: Tree<TType> | undefined): boolean {
        //check if values or structures are different
        if(tree1?.value !== tree2?.value) {
            return false
        }
        //allow case when both nodes do not exist
        if(tree1 === undefined && tree2 === undefined) {
            return true
        }
        //check equality in both children of node
        return internalCheckEquality(tree1?.left, tree2?.left) && internalCheckEquality(tree1?.right, tree2?.right)
    }
    //run recursive function
    return internalCheckEquality(tree1, tree2)
}