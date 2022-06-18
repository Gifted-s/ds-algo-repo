package levelordertraversal
// Adewumi Sunkanmi 2022
// Binary Tree Level Order Traversal
// Medium

// 8564

// 169

// Add to List

// Share
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000






  type TreeNode struct {
      Val int
      Left *TreeNode
      Right *TreeNode
 } 
 
 func levelOrder(root *TreeNode) [][]int {
	if root== nil {
	   return [][]int{}
   }
   result := [][]int{}
   queue := []*TreeNode{root}
   for len(queue) >0 {
	   level :=[]int{}
	   n := len(queue)
	   for i:=0; i<n; i++ {
		   node, updatedQueue := shift(queue)
		   queue = updatedQueue
		   if node != nil {
			   level = append(level, node.Val)
			   queue = append(queue, node.Left)
			   queue = append(queue, node.Right)
			  }
	   }       
	   if len(level) >0 {
		   result = append(result, level)
	   }
   }
	return result 
}

func shift(a []*TreeNode)(*TreeNode, []*TreeNode){
   x, a := a[0], a[1:];
   return x,a
}