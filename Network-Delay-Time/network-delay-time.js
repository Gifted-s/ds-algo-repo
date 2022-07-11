// Adewumi Sunkanmi 2022
// 743. Network Delay Time
// Medium
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
// Example 1:


// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
// Example 2:

// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
// Example 3:

// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1


/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    let N = times.length;
    const adjList = {}
     for(let i=1; i<=n; i++){
        adjList[i] = []
    }
    for(let i=0; i<N; i++){
        const [u, v ,w] = times[i]
        adjList[u].push([w,v])
    }
    
    let visit = new Set()
    let time = 0;
    let minHeap = new PriorityQueue()
    minHeap.offer([0,k])
    
    while(minHeap.size() > 0){
        const [w, v] = minHeap.poll()
        if(visit.has(v)){
            continue
        }
        visit.add(v)
        time = Math.max(time, w)
        for(let i=0; i< adjList[v].length; i++){
            const [nw, nv] =  adjList[v][i]
            if(!visit.has(nv)){
                minHeap.offer([nw + w, nv])
            }
        }
    }
    return visit.size === n ? time : -1
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