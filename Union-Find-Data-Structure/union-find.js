// Copyright Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the union find Data Structure
class UnionFind {
    constructor(size) {
        this.sz = []
        this.id = []
        this.size = size
        this.noOfComponents = 0
        this.size = size
        for (let i = 0; i < size; i++) {
            this.sz[i] = 1
            this.id[i] = i
            this.noOfComponents++
        }
    }

    find(p) {
        let root = p// this is the id we are looking for its root
        while (root !== this.id[root]) {
            // reset root variable to the id found at root index
            root = this.id[root]
        }
        //this is the part where path compression comes in
        while (p !== root) {
            let next = this.id[p]
            this.id[p] = root
            p = next
        }
        return root
    }

    connected(p, q) {
        // if nodes are already connected then return
        if (this.find(p) === this.find(q)) {
            return true
        }
        return false
    }
    unify(p, q) {
        if (this.connected(p, q)) {
            return
        }
        // find the root of node p
        let root1 = this.find(p)
        // find the root of node q
        let root2 = this.find(q)
        // Generally, we merge the component with the smaller size to the component with the larger size
        if (this.sz[root1] < this.sz[root2]) {
            // increase the size of the component node q belongs to
            this.sz[root2] += this.sz[root1]
            // let the root of the component node p belongs to point  q
            this.id[root1] = root2
        }
        else {
            // increase the size of the component node p belongs to
            this.sz[root1] += this.sz[root2]
            // let the root of the component node q belongs to point  p
            this.id[root2] = root1
        }
        // reduce the size of the total component in the union-find data structure
        this.noOfComponents--

    }
}



//  let union_find= new UnionFind(12)
// // console.log(union_find.noOfComponents)
// union_find.unify(4,9)
// union_find.unify(1,0)
// union_find.unify(5,6)
// union_find.unify(5,10)
// union_find.unify(4,3)
// union_find.unify(3,2)
// union_find.unify(7,1)
// union_find.unify(4,5)
// union_find.unify(5,10)
// union_find.unify(11,8)
// union_find.unify(11,1)
// union_find.unify(11,10)

//  console.table(union_find.id)
//  console.log(union_find.noOfComponents)
//  console.log(union_find.sz)


// this example will help you  understand the effect of path compression much more better
let union_find = new UnionFind(10)
//A B C D E F G H I J
//0 1 2 3 4 5 6 7 8 9
union_find.unify(0, 1)
union_find.unify(2, 3)
union_find.unify(4, 5)
union_find.unify(6, 7)
union_find.unify(8, 9)
union_find.unify(9, 6)
union_find.unify(7, 5)
union_find.unify(0, 2)
union_find.unify(3,4)
union_find.unify(6,1)
union_find.unify(8,9)


 console.table(union_find.id)
// console.log(union_find.noOfComponents)
// console.log(union_find.sz)

//OUTPUT
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   8    │
// │    1    │   8    │
// │    2    │   0    │
// │    3    │   0    │
// │    4    │   8    │
// │    5    │   4    │
// │    6    │   8    │
// │    7    │   8    │
// │    8    │   8    │
// │    9    │   8    │
// └─────────┴────────┘
