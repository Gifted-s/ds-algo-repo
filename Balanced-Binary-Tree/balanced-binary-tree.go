package balancedbinarytree

import (
    "math"
)
// Adewumi Sunkanmi copyright 2022
// 110. Balanced Binary Tree
// Easy

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104



// Definition for a binary tree node.
  type TreeNode struct {
     Val int
     Left *TreeNode
     Right *TreeNode
  }

  func isBalanced(root *TreeNode) bool {
    
    var dfs func(node *TreeNode)(bool, int)
    
    dfs = func(node *TreeNode)(bool, int){
        if node == nil{
            return true, 0;
        }
        
        leftBalanced, leftHeight:=dfs(node.Left) 
        rightBalanced, rightHeight:=dfs(node.Right)
        balanced := leftBalanced && rightBalanced && int(math.Abs(float64(leftHeight)-float64(rightHeight))) <= 1
        return balanced, 1 + int(math.Max(float64(leftHeight), float64(rightHeight)))
    }
    balanced, _ := dfs(root)
    return balanced
}