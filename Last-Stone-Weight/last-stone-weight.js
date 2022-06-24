//Adewumi Sunkanmi
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

 

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1
 

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    let minPQ = new PriorityQueue()
    for(let i =0; i<stones.length; i++){
        stones[i] = -1 * stones[i]
        minPQ.offer(stones[i])
    }
    
    while(minPQ.size() >1){
        let firstStone = minPQ.poll()
        let secondStone = minPQ.poll()
        
        if(secondStone> firstStone){
            let diff = firstStone-secondStone
            minPQ.offer(diff)
        }
    }
    
    minPQ.offer(0)
    return Math.abs(minPQ.data[0])
};




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