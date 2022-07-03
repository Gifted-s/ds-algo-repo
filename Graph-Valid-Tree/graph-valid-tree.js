// Adewumi Sunkanmi 2022

// Description
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// Example
// Example 1:

// Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// Output: true.
// Example 2:

// Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// Output: false.

export class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    validTree(n, edges) {
      // create adjecency list;
      if (n == 0) {
        return true
      }
      let adjList = {}
      let visit = new Set()
      for (let i = 0; i < edges.length; i++) {
        adjList[i] = []
      }
      for (let i = 0; i < edges.length; i++) {
        let edge = edges[i]
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
      }
      function dfs(n, prev) {
        if (visit.has(n)) {
          return false
        }
        visit.add(n)
        for (let i = 0; i < adjList[n].length; i++) {
          let child = adjList[n][i]
          if (child === prev) {
            continue
          }
          if (!dfs(child, n)) {
            return false
          }
        }
        return true
      }
  
      return dfs(0, -1) && n === visit.size
    }
  
  }