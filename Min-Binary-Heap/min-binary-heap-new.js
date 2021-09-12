// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn the Min Binary Heap Data Structure Implemetation

class MinHeap {
    constructor() {
        this.heap = []
    }
    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    insert(item) {
        if (this.heap.length === 0) {
            this.heap.push(item)
            return
        }
        this.heap.push(item)
        let index = this.heap.length - 1
        while (this.heap[parentIndex(index)] > this.heap[index]) {
            this.swap(parentIndex(index), index)
            index = parentIndex(index)
        }
    }

    poll() {
        let minElement = this.heap.shift()
        let lastElement = this.heap[this.heap.length - 1]
        this.heap.unshift(lastElement)
        this.heap.pop()
        this.heapify(0)
        return minElement
    }

    heapify(root) {
        let smallest = root
        if (root < this.heap.length - 1 && this.heap[root] > this.heap[leftChildIndex(smallest)]) {
            smallest = leftChildIndex(smallest)
        }
        if (root < this.heap.length - 1 && this.heap[root] > this.heap[rightChildIndex(smallest)]) {
            smallest = rightChildIndex(smallest)
        }
        if (smallest !== root) {
            this.swap(root, smallest)
            this.heapify(smallest)
        }
    }

    remove(item) {
        let index;
        for (let i in this.heap) {
            if (this.heap[i] == item) index = i
        }
        let lastElement = this.heap[this.heap.length - 1]
        this.heap[index] = lastElement
        this.heap.pop()
        this.heapify(0)
        return item
    }
}

const leftChildIndex = (i) => (2 * i) + 1
const rightChildIndex = (i) => (2 * i) + 2
const parentIndex = (i) => (i - 1) / 2


const heap = new MinHeap()

heap.insert(7)

heap.insert(1)

heap.insert(9)

heap.insert(3)

heap.insert(10)

heap.insert(7)

heap.insert(6)
heap.insert(19)

heap.insert(5)

heap.insert(2)
console.log(heap)

console.log(heap.remove(10))
console.log(heap)