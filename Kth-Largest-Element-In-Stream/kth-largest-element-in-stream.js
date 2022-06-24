/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.pq = new PriorityQueue(nums);
    this.k = k;
    
    // [4,5,8], k = 3
    while (this.pq.size() > k) {
        this.pq.poll();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.pq.size() < this.k) {
        this.pq.offer(val);
    } else if (val > this.pq.peek()) {
        this.pq.poll();
        this.pq.offer(val);
    }
    
    return this.pq.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class PriorityQueue {
    constructor(data) {
        this.comparator = (a, b) => a - b;
        this.data = data;
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