// Adewumi Sunkanmi 2022
// 778. Swim in Rising Water
// Hard

// 2252

// 157

// Add to List

// Share
// You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

// The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

// Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

 

// Example 1:


// Input: grid = [[0,2],[1,3]]
// Output: 3
// Explanation:
// At time 0, you are in grid location (0, 0).
// You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
// You cannot reach point (1, 1) until time 3.
// When the depth of water is 3, we can swim anywhere inside the grid.
// Example 2:


// Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// Output: 16
// Explanation: The final route is shown.
// We need to wait until time 16 so that (0, 0) and (4, 4) are connected.


/**
 * @param {number[][]} grid
 * @return {number}
 */
 var swimInWater = function(grid) {
    let N = grid.length;
    let visit = new Set()
    visit.add(grid[0][0])
    const dir = [[0,1], [0,-1], [1,0], [-1,0]]
    let minHeap = new PriorityQueue()
    minHeap.offer([grid[0][0],0, 0])
    while (minHeap.size()>0){
        const [h, r, c] = minHeap.poll()
        if(r === N-1 && c===N-1){
            return h
        }
        
        for(let i=0; i< dir.length; i++){
            let [nr,nc] = dir[i]
            nr = r+nr
            nc = c+nc
            if(nr <0 || nc<0 || nr=== N|| nc === N || visit.has(grid[nr][nc]) ){
                continue
            }
            visit.add(grid[nr][nc])
            minHeap.offer([Math.max(h, grid[nr][nc]), nr,nc])
        }
    }
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
               
               if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex][0], this.data[findIndex][0]) < 0){
                   findIndex = leftIndex;
               }
               
               if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex][0], this.data[findIndex][0]) < 0) {
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
               
               if (this.comparator(this.data[index][0], this.data[parentIndex][0]) < 0) {
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