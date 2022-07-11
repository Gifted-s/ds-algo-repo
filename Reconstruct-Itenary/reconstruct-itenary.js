// Adewumi Sunkanmi 2022
// 332. Reconstruct Itinerary
// Hard

// 3986

// 1575

// Add to List

// Share
// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

 

// Example 1:


// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:


// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.


/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    function comparator(a, b) {
      if (a[0]+a[1] < b[0]+b[1]) return -1;
      if (a[0]+a[1] > b[0]+b[1]) return 1;
      return 0;
    }
    let result =["JFK"]
    let adjList = []
    tickets = tickets.sort(comparator);
    for(let ticket of tickets){
       adjList[ticket[0]] = [] 
       adjList[ticket[1]] = [] 
    }
    for(let [key, val] of tickets){
       adjList[key].push(val) 
    }
    function dfs(src){
        if(result.length === tickets.length+1){
            return true
        }
        if(adjList[src].length===0){
            return false
        }
        
        const temp = [...adjList[src]]
        for(let i=0; i<temp.length; i++ ){
           let dst= adjList[src].shift()
           result.push(dst);
           if(dfs(dst)){
               return true
           }
           adjList[src].push(dst)
           result.pop()
        }
        return false
    }
       dfs("JFK")
       return result
   };