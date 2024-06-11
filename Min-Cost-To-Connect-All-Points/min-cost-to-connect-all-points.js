// Adewumi Sunkanmi 2022
// 1584. Min Cost to Connect All Points
// Medium

// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

 

// Example 1:


// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation: 

// We can connect the points as shown above to get the minimum cost of 20.
// Notice that there is a unique path between every pair of points.
// Example 2:

// Input: points = [[3,12],[-2,5],[-4,1]]
// Output: 18
/**
 * @param {number[][]} points
 * @return {number}
 */
 var minCostConnectPoints = function(points) {
    let N = points.length;
    let adjList = {}
    for(let i =0; i < N; i++){
        adjList[i] = []
    }
    for(let i =0; i < N; i++){     
     for(let j =i+1; j < N; j++){
        let [x1,y1] = points[i]
        let [x2,y2] = points[j]
        let dist = Math.abs(x1-x2) + Math.abs(y1-y2) 
        adjList[i].push([dist,j])
        adjList[j].push([dist,i])
      }
    }
    
    let visit = new Set();
    let minHeap = new PriorityQueue()
    minHeap.offer([0,0])
    let res =0;
    while(visit.size < N){
        let [cost, i] = minHeap.poll()
        if(visit.has(i)){
            continue
        }
        visit.add(i)
        res+= cost;
        for(let j=0; j< adjList[i].length;j++){
            let point= adjList[i][j]
             if(!visit.has(point[1])){
             minHeap.offer(point)
        }
        }
    }
    return res
   
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