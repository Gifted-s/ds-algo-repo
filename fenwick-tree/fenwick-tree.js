class FenwickTree {
    constructor() {
        // this will be our fenwick tree
        this.tree = []
        //this will store the computed prefix sums: NOTE this is only here for testing purpose
        this.prefix_sum = []
    }
    // this will help us creat the tree in a linear time 
    createTree(values) {
        // store sum
        let s = 0
        // set initial prefix sum to zero
        this.prefix_sum[0] = 0
        for (let j = 0; j < values.length; j++) {
            // add the  current value at the values array to the s variable
            s += values[j]
            // append it to the prefix sum array
            this.prefix_sum[j + 1] = s
        }

        // let the tree be eqivalent to the values array first, if you are using java you can use a deepcopy
        this.tree = values
        // use the convertTreeTo1BasedIndex if you want to convert javascript tree array to 1 based index but note that this will cost extra O(n) time
        // this.convertTreeTo1BasedIndex()
        // get the array length
        const N = this.tree.length;
        // set the initial index to 1
        let i = 1
        // while the current index is less than or equal to the tree length
        while (i <= N) {
            // get the immediate parent of the index by adding that index with its less significant bit LSB
            // e.g the less significant bit of 2 to decimal is 2 so its parent is at 4
            let parent_index_position = i + this.lsb(i)
            // is the parent is within the tree 
            if (parent_index_position <= N) {
                // add the value at the ciurrent index to the immediate parent value
                this.tree[parent_index_position - 1] += this.tree[i - 1]
            }
            // increment i to go to the next index
            i++
        }
        /// return reformed tree
        return this.tree
    }
    // convertTreeTo1BasedIndex(){
    //     let res=[]
    //     for ( let j =0; j < this.tree.length; j++){
    //         res[j+1] = this.tree[j]
    //     }
    //     this.tree= res
    //     return
    // }


    // get prefix sum for a particular index
    prefixSum(i) {
        // create the sum variable and let it be initially 0;
        let sum = 0;
        // ensure i is not zeroi this will mean that we have reach the end of the tree or the value passed is 0 which is invalid
        while (i !== 0) {
            // add the value at the current index denoted by i to the sum variable
            sum += this.tree[i - 1]
            // get the less significant bit of i and subtract it from the current index i so we can know which index to hop to next
            i &= ~this.lsb(i) // equivalent to  i-= this.lsb(i)
        }
        // return the prefix sum
        return sum
    }


    // this funtion will perform range sum queries
    // i and j are the positions in our tree respectively
    sum(i, j) {
        // j must always be higher than i
        if (j < i) throw new RangeError("index j can not be lesser index i please check out the parameters")
        // calculate the difference between the prefix sums
        let difference_in_prefix_sum = this.prefixSum(j) - this.prefixSum(i)
        // return the prefix sum difffrent
        return difference_in_prefix_sum
    }

    // this will help us perform point updates in our tree
    pointUpdate(i, x) {
        // i must not be less than or equal to 0
        if (i <= 0) {
            throw new RangeError("i can only begin at 1")
        }
        // get the value to add to the values at i parent indexes
        x -= this.tree[i - 1]
        // loop while i is less than and not equal to 0
        while (i < this.tree.length && i !== 0) {
            // get the parent index by adding the current i less significant bit to i
            let parent_postion = i + this.lsb(i)
            // check if the parent of i is within the size of the tree
            if (parent_postion <= this.tree.length) {
                // add to the parent, the x value
                this.tree[parent_postion - 1] += x
            }
            // set i to the parent index
            i = parent_postion
        }
        // return true to signify that update was successful
        return true
    }
    // print the tree
    printTree() {
        return this.tree
    }

    // this will help us calculate the less significant bit of any  number
    lsb(i) {
        return i & -i
    }
}

const fenwickTree = new FenwickTree()
fenwickTree.createTree([3, 2, 5, 1, 7, 8, 2, 4, 2, 4, 6, 3])
console.log(fenwickTree.tree)
console.log(fenwickTree.prefix_sum)
// use the fenwick tree range sum algorithm
console.log(fenwickTree.sum(0, 5))
// use the normal range sum method
console.log(fenwickTree.prefix_sum[5] - fenwickTree.prefix_sum[0])
console.log(fenwickTree.pointUpdate(1, 2))
console.log(fenwickTree.tree)