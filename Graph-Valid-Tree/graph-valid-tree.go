package graphvalidtree
/**
 * @param n: An integer
 * @param edges: a list of undirected edges
 * @return: true if it's a valid tree, or false
 */
 func ValidTree(n int, edges [][]int) bool {
    // write your code here
    visited:= map[int]bool{}
    adjList := map[int][]int{}
    for i, _ := range edges{
        adjList[i] = []int{}
    }
    for _, edge := range edges{
        adjList[edge[0]] = append( adjList[edge[0]], edge[1])
        adjList[edge[1]] = append( adjList[edge[1]], edge[0])
    }
    var dfs  func(i int, prev int) bool
    dfs = func(i int, prev int)bool{
        if _, ok:= visited[i];ok{
            return false
        }

        visited[i]= true
        for j:=0; j< len(adjList[i]);j++{
            if adjList[i][j]==prev{
                continue
            }
            if(!dfs(adjList[i][j], i)){
                return false
            }
        }
        return true 
    }
  valid := dfs(0, -1)
  return len(visited)== n && valid
}


