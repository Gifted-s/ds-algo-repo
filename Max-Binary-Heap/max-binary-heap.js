// Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Max Binary Heap Data Structure

const leftChild = (index) => (2 * index) + 1;
const rightChild = (index) => (2 * index) + 2;
const parentNode = (index) => Math.floor((index - 1) / 2)

class MaxHeap {
    constructor() {
        // initialize empty heap
        this.heap = []
    }

    peek() {
        // return root without removing it
        return this.heap[0];
    }
    // swaps the values in two indexes
    swapDataAtIndexes(index1, index2) {
        // store current value of index1
        const temp = this.heap[index1]

        // re-asign the value of index1 to index2
        this.heap[index1] = this.heap[index2]

        // re-asign the value of index2 to temp
        this.heap[index2] = temp
    }
    insert(data) {
        // push to the end of the heap
        this.heap.push(data)
        let index = this.heap.length - 1

        // if the value of the child node is greater  than the value of the parent node, swap them
        while (index !== 0 && this.heap[index] > this.heap[parentNode(index)]) {
            this.swapDataAtIndexes(index, parentNode(index))

            // set index to be the index of the parent node
            index = parentNode(index);
        }
    }

    extractMax() {
        // remove root node
        const maxNode = this.heap.shift()
        const lastNode = this.heap[this.heap.length - 1]

        // add the last node to the front of the heap
        this.heap.unshift(lastNode)

        // remove the last node to avoid redundancy
        this.heap.pop()

        // run the heapify  function
        this.heapify(0)

        //return root
        return maxNode
    }

    remove(data) {
        let searchIndex = 0
        // get index of the data to remove
        for (let i in this.heap) {
            if (this.heap[i] === data) {
                searchIndex = i
            }
        }
        // swap the last node with the node to remove
        this.swapDataAtIndexes(this.heap.length - 1, searchIndex)
        // remove last node
        const removed = this.heap.pop()
        // compare the data at the search index with the parent node and replace if they are greater than the parent node
        while (searchIndex !== 0 && this.heap[searchIndex] > this.heap[parentNode(searchIndex)]) {
            this.swapDataAtIndexes(searchIndex, parentNode(searchIndex))
            searchIndex = parentNode(searchIndex)
        }

        // return removed node
        return removed
    }

    heapify(index) {

        let leftIndex = leftChild(index)
        let rightIndex = rightChild(index)
        let smallest = index;
        // compare data at index with the left child
        if (leftIndex < this.heap.length - 1 && this.heap[smallest] < this.heap[leftIndex]) {
            smallest = leftIndex
        }
          // compare data at index with the right child
        if (rightIndex < this.heap.length - 1 && this.heap[smallest] < this.heap[rightIndex]) {
            smallest = rightIndex
        }
        if (smallest !== index) {
            // swap the nodes if the child is lesser than its parent
            this.swapDataAtIndexes(smallest, index)
            // call heapify recursively
            this.heapify(smallest)
        }

    }
}

// test code
let heap = new MaxHeap()

heap.insert(1)
heap.insert(5)
heap.insert(34)
heap.insert(30)
heap.insert(23)
heap.insert(40)
heap.insert(20)
heap.insert(93)
heap.insert(4)
heap.insert(3)
heap.insert(60)
console.log(heap)
console.log(heap.extractMax())
console.log(heap)
console.log(heap.remove(20))
console.log(heap)