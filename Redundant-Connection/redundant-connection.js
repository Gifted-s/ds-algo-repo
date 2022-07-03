// Adewumi Sunkanmi 2022
// 684. Redundant Connection
// Medium
// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

// Example 1:


// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
// Example 2:


// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    const par =new Array(edges.length+1)
    const rank =new Array(edges.length+1).fill(1)
    for(let i = 0; i< edges.length+1;i++){
      par[i] = i
    }
    
    function findParent(n){
        let p = par[n]
        while(p !== par[p]){
            par[p] = par[par[p]] // path compression 
            p = par[p]
        }
        return p
    }
      
    function union(n1, n2){
        let p1 = findParent(n1)
        let p2 = findParent(n2)
        
        if(p1 === p2){
            return false
        }
        
        if(rank[p1] >= rank[p2]){
            par[p2] = p1
            rank[p1] += rank[p2]
        }else{
            par[p1] = p2
            rank[p2] += rank[p1]
        }
        return true
    }
    
    for(let i = 0; i< edges.length;i++){
      let n1 = edges[i][0]
      let n2 = edges[i][1]
      if(!union(n1,n2)){
          return [n1, n2]
      }
    }
  };