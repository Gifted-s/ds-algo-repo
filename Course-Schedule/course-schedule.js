// Adewumi Sunkanmi 2022
// 207. Course Schedule
// Medium
// Share
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    // create adjacency list
    let preMap = {}
    for(let i =0; i <numCourses; i++){
        preMap[i] =[]
    }
    for( let i = 0; i < prerequisites.length; i++){
       let pre = prerequisites[i]
       preMap[pre[0]].push(pre[1]) 
    }
    // to store all the nodes that we are still visiting
    let visiting = new Set()
    
    // start dfs
    function dfs(crs){
        // check for cycle
        if(visiting.has(crs)){
            return false
        } 
       
        if(preMap[crs].length ===0){
            return true
        }
        // just visitng this course
        visiting.add(crs)
        for (let i = 0; i< preMap[crs].length; i++){
            let courseToCheck = preMap[crs][i]
            if(!dfs(courseToCheck)){
                return false
            }
        }
        visiting.delete(crs)
        preMap[crs]=[]
        return true
    }
    let i = 0
    while(i< numCourses){
        if(!dfs(i)){
            return false
        }
        i++
    }
    return true
};