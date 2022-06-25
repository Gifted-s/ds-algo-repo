// Adewumi Sunkanmi 2022
// 295. Find Median from Data Stream
// Hard
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
var MedianFinder = function() {
    this.small = new PriorityQueue() // maxHeap
    this.large = new PriorityQueue() // minHeap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.small.offer(-1*num)
    // check if element just added to small is lesser than the smallest element at right
    if(this.small.size() && 
       this.large.size() &&
       this.small.peek()*-1 > this.large.peek()){
    
        let smallPeekMax = this.small.poll()
        this.large.offer(-1 * smallPeekMax)
    }
    if(this.small.size() > this.large.size()+ 1){
        let smallPeekMax = this.small.poll()
        this.large.offer(-1 * smallPeekMax)
    }
    if(this.large.size() > this.small.size() + 1){
        let largePeekMin = this.large.poll()
        this.small.offer(-1 * largePeekMin)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if(this.small.size() > this.large.size()){
        let smallPeekMax = this.small.peek()
        return (-1 * smallPeekMax)
    }
     if(this.large.size() > this.small.size()){
       let largePeekMin = this.large.peek()
        return (largePeekMin)
    }
     if(this.large.size() === this.small.size()){
      let smallPeekMax = -1* this.small.peek()
      let largePeekMin = this.large.peek()
      return ((smallPeekMax + largePeekMin)/2)
    }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */



class PriorityQueue {
    constructor(data) {
        this.comparator = (a, b) => a - b;
        this.data = [];
        this.heapify();
    }
    
    heapify() {
        if (this.size < 2) return;
        
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    
    peek() {
        if (this.size() === 0) return null; 
        
        return this.data[0];
    }
    
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    
    poll() {
        if (this.size() === 0) return null;
        
        const result = this.data[0];
        const last = this.data.pop();
        
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }

        return result;
    }
    
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        
        while (true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let findIndex = index;
            
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0){
                findIndex = leftIndex;
            }
            
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
        
    }
    
    bubbleUp(index) {
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;   
            }
        }
        
    }
    
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    
    size() {
        return this.data.length;
    }
    
    
}