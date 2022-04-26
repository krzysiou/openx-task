import { numberOfLeaves, longestPathEdgeCount, areTreesEqual, generateTree, Tree } from './tree'

describe('numberOfLeaves', () => {
    describe('performance', () => {
        it('checks if calling function on 5 level tree takes less than 0.5 milisecond', () => {
            const tree: Tree<number> = generateTree(5)
            const start = performance.now()
            numberOfLeaves(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(0.5)
        })
        it('checks if calling function on 10 level tree takes less than 1 milisecond', () => {
            const tree: Tree<number> = generateTree(10)
            const start = performance.now()
            numberOfLeaves(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(1)
        })
        it('checks if calling function on 20 level tree takes less than 50 miliseconds', () => {
            const tree: Tree<number> = generateTree(20)
            const start = performance.now()
            numberOfLeaves(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(50)
        })
    })
    describe('corectness', () => {
        it('checks if calling function on a tree with one node returns 1', () => {
            const tree: Tree<number> = {
                value: 0
            }
            expect(numberOfLeaves(tree)).toBe(1)
        })
        it('checks if calling function on a tree with root and left child returns 1', () => {
            const tree: Tree<number> = {
                value: 0,
                left: {
                    value: 1
                }
            }
            expect(numberOfLeaves(tree)).toBe(1)
        })
        it('checks if calling function on a tree with root and right child returns 1', () => {
            const tree: Tree<number> = {
                value: 0,
                right: {
                    value: 2
                }
            }
            expect(numberOfLeaves(tree)).toBe(1)
        })
        it('checks if calling function on a tree with root and two children returns 2', () => {
            const tree: Tree<number> = {
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
            const tree: Tree<number> = generateTree(5)
            expect(numberOfLeaves(tree)).toBe(32)
        })
        it('checks if calling function on a 10 level tree returns 1024 (2^10)', () => {
            const tree: Tree<number> = generateTree(10)
            expect(numberOfLeaves(tree)).toBe(1024)
        })
        it('checks if calling function on an asymetric tree with 5 leaves returns 5', () => {
            const tree: Tree<number> = {
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
        it('checks if calling function on 5 level tree takes less than 0.5 miliseconds', () => {
            const tree: Tree<number> = generateTree(5)
            const start = performance.now()
            longestPathEdgeCount(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(0.5)
        })
        it('checks if calling function on 10 level tree takes less than 1 milisecond', () => {
            const tree: Tree<number> = generateTree(10)
            const start = performance.now()
            longestPathEdgeCount(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(1)
        })
        it('checks if calling function on 20 level tree takes less than 50 miliseconds', () => {
            const tree: Tree<number> = generateTree(20)
            const start = performance.now()
            longestPathEdgeCount(tree)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(50)
        })
    })
    describe('corectness', () => {
        it('checks if calling function on a tree with one node returns 0', () => {
            const tree: Tree<number> = {
                value: 0
            }
            expect(longestPathEdgeCount(tree)).toBe(0)
        })
        it('checks if calling function on a tree with root and left child returns 1', () => {
            const tree: Tree<number> = {
                value: 0,
                left: {
                    value: 1
                }
            }
            expect(longestPathEdgeCount(tree)).toBe(1)
        })
        it('checks if calling function on a tree with root and right child returns 1', () => {
            const tree: Tree<number> = {
                value: 0,
                right: {
                    value: 2
                }
            }
            expect(longestPathEdgeCount(tree)).toBe(1)
        })
        it('checks if calling function on a tree with root and two children returns 1', () => {
            const tree: Tree<number> = {
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
            const tree: Tree<number> = generateTree(5)
            expect(longestPathEdgeCount(tree)).toBe(5)
        })
        it('checks if calling function on a 10 level tree returns 10', () => {
            const tree: Tree<number> = generateTree(10)
            expect(longestPathEdgeCount(tree)).toBe(10)
        })
        it('checks if calling function on an asymetric tree with longest path from root to leaf equal to 4 returns 4', () => {
            const tree: Tree<number> = {
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
        it('checks if comparing 5 level trees takes less than 0.5 milisecond', () => {
            const tree1: Tree<number> = generateTree(5)
            const tree2: Tree<number> = generateTree(5)
            const start = performance.now()
            areTreesEqual(tree1, tree2)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(0.5)
        })
        it('checks if comparing 10 level trees takes less than 1 milisecond', () => {
            const tree1: Tree<number> = generateTree(10)
            const tree2: Tree<number> = generateTree(10)
            const start = performance.now()
            areTreesEqual(tree1, tree2)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(1)
        })
        it('checks if comparing 20 level trees takes less than 50 miliseconds', () => {
            const tree1: Tree<number> = generateTree(20)
            const tree2: Tree<number> = generateTree(20)
            const start = performance.now()
            areTreesEqual(tree1, tree2)
            const finish = performance.now()
            expect(finish - start).toBeLessThan(50)
        })
    })
    describe('corectness', () => {
        it('checks if comparing trees with one node of the same value returns true', () => {
            const tree1: Tree<number> = {
                value: 0
            }

            const tree2: Tree<number> = {
                value: 0
            }
            expect(areTreesEqual(tree1, tree2)).toBe(true)
        })
        it('checks if comparing trees with one node of different value returns false', () => {
            const tree1: Tree<number> = {
                value: 0
            }

            const tree2: Tree<number> = {
                value: 1
            }
            expect(areTreesEqual(tree1, tree2)).toBe(false)
        })
        it('checks if comparing trees with same structure and values returns true', () => {
            const tree1: Tree<number> = {
                value: 0,
                left: {
                    value: 1
                }
            }

            const tree2: Tree<number> = {
                value: 0,
                left: {
                    value: 1
                }
            }
            expect(areTreesEqual(tree1, tree2)).toBe(true)
        })
        it('checks if comparing trees with same structure but different values returns false', () => {
            const tree1: Tree<number> = {
                value: 0,
                left: {
                    value: 1
                }
            }

            const tree2: Tree<number> = {
                value: 0,
                left: {
                    value: 2
                }
            }
            expect(areTreesEqual(tree1, tree2)).toBe(false)
        })
        it('checks if comparing trees with different structure returns false', () => {
            const tree1: Tree<number> = {
                value: 0,
                right: {
                    value: 2
                }
            }

            const tree2: Tree<number> = {
                value: 0,
                left: {
                    value: 2
                },
                right: {
                    value: 2
                }
            }
            expect(areTreesEqual(tree1, tree2)).toBe(false)
        })
        it('checks if comparing equal 5 level trees returns true', () => {
            const tree1: Tree<number> = generateTree(5)
            const tree2: Tree<number> = tree1
            expect(areTreesEqual(tree1, tree2)).toBe(true)
        })
        it('checks if comparing different 5 level trees returns false', () => {
            const tree1: Tree<number> = generateTree(5)
            const tree2: Tree<number> = generateTree(5)
            expect(areTreesEqual(tree1, tree2)).toBe(false)
        })
        it('checks if comparing equal 10 level trees returns true', () => {
            const tree1: Tree<number> = generateTree(10)
            const tree2: Tree<number> = tree1
            expect(areTreesEqual(tree1, tree2)).toBe(true)
        })
        it('checks if comparing different 10 level trees returns false', () => {
            const tree1: Tree<number> = generateTree(10)
            const tree2: Tree<number> = generateTree(10)
            expect(areTreesEqual(tree1, tree2)).toBe(false)
        })
    })
})