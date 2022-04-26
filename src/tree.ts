//type that defines tree structure
export type Tree<TType> = {
  value: TType,
  left?: Tree<TType>
  right?: Tree<TType>,
}

//return number of nodes that do not have children
export function numberOfLeaves<TType>(tree: Tree<TType>): number {

    function internalCheckAmount<TType>(tree: Tree<TType> | undefined): number {

        if(tree === undefined) {
            return 0
        }

        if(tree.left === undefined && tree.right === undefined) {
            return 1
        }
    
        return internalCheckAmount(tree.left) + internalCheckAmount(tree.right)
    }

    return internalCheckAmount(tree)
}

//return the number of edges that form the longest path from root to any leaf
export function longestPathEdgeCount<TType>(tree: Tree<TType>): number {

    function internalCheckLength<TType>(tree: Tree<TType>, counter: number): number {

        const leftValue = tree.left === undefined ? counter : internalCheckLength(tree.left, counter + 1)
        const rightValue = tree.right === undefined ? counter : internalCheckLength(tree.right, counter + 1)
    
        return leftValue > rightValue ? leftValue : rightValue
    }
  
    return internalCheckLength(tree, 0)
}

//compare two trees
export function areTreesEqual<TType>(tree1: Tree<TType>, tree2: Tree<TType>): boolean {

    function internalCheckEquality<TType>(tree1: Tree<TType> | undefined, tree2: Tree<TType> | undefined): boolean {

        if(tree1?.value !== tree2?.value) {
            return false
        }
    
        if(tree1 === undefined && tree2 === undefined) {
            return true
        }
    
        return internalCheckEquality(tree1?.left, tree2?.left) && internalCheckEquality(tree1?.right, tree2?.right)
    }
  
    return internalCheckEquality(tree1, tree2)
}

//generate tree of given height and random values (used for testing)
export function generateTree(height: number): Tree<number> {
    
    function innerGeneration(height: number, node: Tree<number>): void {
    //end recursion when height reaches 0
        if(height == 0){
            return
        }
        //set values of children
        node.left = {
            value: Math.floor(Math.random() * 10)
        }

        node.right = {
            value: Math.floor(Math.random() * 10)
        }
        //recursive call
        innerGeneration(height - 1, node.left)
        innerGeneration(height - 1, node.right)
    }
    //create root
    const root: Tree<number> = {
        value: Math.floor(Math.random() * 10)
    }
    //begin generation
    innerGeneration(height, root)
    //return root

    return root
}