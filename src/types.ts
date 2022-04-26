//type that defines tree structure
export type Tree<TType> = {
  value: TType,
  left?: Tree<TType>
  right?: Tree<TType>,
}