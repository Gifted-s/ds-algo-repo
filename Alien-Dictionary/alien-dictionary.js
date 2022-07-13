// Adewumi Sunkanmi 2022
// Leetcode 269(Premium)

function alienOrder(words) {
    // Write your code here
    let adjList = {}
    for (let w of words) {
      for (let chr of w) {
        adjList[chr] = new Set()
      }
    }
    for (let i = 0; i < words.length-1; i++) {
      let w1 = words[i]
      let w2 = words[i + 1]
      let minLength = Math.min(w1.length, w2.length)
      if (w1.slice(0, minLength + 1) === w2.slice(0, minLength + 1) && w1.length > w2.length) {
        return ""
      }
      for (let j = 0; j < minLength; j++) {
        if (w1[j] !== w2[j]) {
          adjList[w1[j]].add(w2[j])
          break
        }
      }
    }
  
    let visit = {} // #false if not visited // true if visited and in path
    let result = []
    function dfs(c) {
      if (c in visit) {
        return visit[c]
      }
      visit[c] = true
      let connected_to = Array.from(adjList[c]);
      for (let i of connected_to){
         if(dfs(i)){
           return true
         }
      }
      visit[c] = false
      result.push(c)
    }
    for(let c of Object.keys(adjList)){
      if(dfs(c)){
        return ""
      }
    }
    return result.reverse().join("")
  }
