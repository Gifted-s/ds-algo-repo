
// Adewumi Sunkanmi 2022
// 973. K Closest Points to Origin
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let result =[]
    let minPQ = new PriorityQueue()
    for ([x, y] of points){
     let dist = (x**2) + (y**2)
     minPQ.offer([dist, x, y])
    }
       while(k>0){
         let point =  minPQ.poll()
         console.log(point)
         result.push([point[1], point[2]])
         k--
       }
       return result;
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