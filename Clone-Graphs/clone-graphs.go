package clonegraphs

type Node struct {
	Val       int
	Neighbors []*Node
}

func cloneGraph(node *Node) *Node {
	oldToNew := map[*Node]*Node{}
	var dfs func(node *Node) *Node
	dfs = func(node *Node) *Node {
		clone, exist := oldToNew[node]
		if exist {
			return clone
		}
		clone = &Node{Val: node.Val}
		oldToNew[node] = clone
		for _, child := range node.Neighbors {
			clone.Neighbors = append(clone.Neighbors, dfs(child))
		}
		return clone
	}
	if node == nil {
		return nil
	}
	return dfs(node)
}
