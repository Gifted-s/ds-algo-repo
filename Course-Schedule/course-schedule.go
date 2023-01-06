package courseschedule
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

 func canFinish(numCourses int, prerequisites [][]int) bool {
   visited:= map[int]bool{}
   adjList := map[int][]int{}
   for c := 0; c< numCourses;  c++{
       adjList[c] = []int{}
   }
   for i, _ :=  range prerequisites{
       c := prerequisites[i][0]// course
       d := prerequisites[i][1]// dependency
       adjList[c] = append(adjList[c], d)
   }
   var checkDependency func(i int) bool
   checkDependency = func(i int)bool{
       if _, ok := visited[i]; ok{
           return false
       } 
       if len(adjList[i]) == 0 {
           return true
       }
       visited[i]= true
       for j:=0; j< len(adjList[i]); j++{
           if !checkDependency(adjList[i][j]){
               return false;
           }
       }
       delete(visited, i)
       adjList[i]=[]int{}
       return true;
   }
   
   for c := 0; c< numCourses;  c++{
       if(!checkDependency(c)){
           return false
       }
   }
   
   return true
   
}