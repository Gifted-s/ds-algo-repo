//Adewumi Sunkanmi 2022
// 621. Task Scheduler
// Medium
// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.
// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
//  var leastInterval = function(tasks, n) {
//     const hashMap={}
//     for(let i of tasks){
//         if(i in hashMap ){
//             hashMap[i]+=1
//         }else{
//              hashMap[i]=1
//         }
//     }
//     let values = Object.values(hashMap)
//     let maxPQ = new  PriorityQueue()
//     values.forEach(val=>{
//         maxPQ.offer(-1 * val)
//     })
    
//     let queue = []
//     let time = 0;
//     while(maxPQ.size() >0 || queue.length >0){
//         time+=1
//         if(maxPQ.size() >0 ){
//         let val = maxPQ.poll()
//         val = val+1;
//         if(val !==0){
//           queue.push([val, time + n ])
//         }
//         }
        
//         if(queue.length>0 && queue[0][1] === time){
//             let thesameTask = queue.shift()
//             maxPQ.offer(thesameTask[0])
//         }
//     }
//   return time;
// };











// class PriorityQueue {
//     constructor(data) {
//         this.comparator = (a, b) => a - b;
//         this.data = [];
//         this.heapify();
//     }
    
//     heapify() {
//         if (this.size < 2) return;
        
//         for (let i = 1; i < this.size(); i++) {
//             this.bubbleUp(i);
//         }
//     }
    
//     peek() {
//         if (this.size() === 0) return null; 
        
//         return this.data[0];
//     }
    
//     offer(value) {
//         this.data.push(value);
//         this.bubbleUp(this.size() - 1);
//     }
    
//     poll() {
//         if (this.size() === 0) return null;
        
//         const result = this.data[0];
//         const last = this.data.pop();
        
//         if (this.size() !== 0) {
//             this.data[0] = last;
//             this.bubbleDown(0);
//         }

//         return result;
//     }
    
//     bubbleDown(index) {
//         const lastIndex = this.size() - 1;
        
//         while (true) {
//             let leftIndex = index * 2 + 1;
//             let rightIndex = index * 2 + 2;
//             let findIndex = index;
            
//             if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0){
//                 findIndex = leftIndex;
//             }
            
//             if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
//                 findIndex = rightIndex;
//             }
            
//             if (index !== findIndex) {
//                 this.swap(index, findIndex);
//                 index = findIndex;
//             } else {
//                 break;
//             }
//         }
        
//     }
    
//     bubbleUp(index) {
        
//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
            
//             if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;   
//             }
//         }
        
//     }
    
//     swap(index1, index2) {
//         [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
//     }
    
//     size() {
//         return this.data.length;
//     }
    
    
// }