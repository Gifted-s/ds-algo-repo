const leftChild = (index) => (2 * index) + 1;
const rightChild = (index) => (2 * index) + 2;
const parentNode = (index) => Math.floor((index - 1) / 2)

class MinHeap {
    constructor() {
        this.heap = []
    }
    
    peek() {
        return this.heap[0];
    }
     swapDataAtIndexes(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    insert(data){
        this.heap.push(data)
        let index = this.heap.length-1
        while(index!==0 && this.heap[index]< this.heap[parentNode(index)]){
            this.swapDataAtIndexes(index,parentNode(index))
            index = parentNode(index);
         }
    }
    heapify(index){
        
        let leftIndex = leftChild(index)
        let rightIndex= rightChild(index)
        let smallest = index;
        if(leftIndex < this.heap.length-1 && this.heap[smallest] > this.heap[leftIndex]){
            smallest= leftIndex
        } 
        if(rightIndex < this.heap.length-1 && this.heap[smallest] > this.heap[rightIndex]){
            smallest=  rightIndex
        }
        if(smallest !== index){
            this.swapDataAtIndexes(smallest, index)
            this.heapify(smallest)
        }

    }
    extractMin(){
     const maxNode = this.heap.shift()
     const lastNode = this.heap[this.heap.length-1]
     this.heap.unshift(lastNode)
     this.heap.pop()
     this.heapify(0)
     return maxNode 

    }
}


let heap= new MinHeap()

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
console.log(heap.extractMin())
console.log(heap)