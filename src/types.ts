//type that defines tree structure
export type Tree<TType> = {
  value: TType,
  left?: Tree<TType>
  right?: Tree<TType>,
}

//type allows both Tree<TType> and undefined to be passed
export type TreeModified<TType> = Tree<TType> | undefined
