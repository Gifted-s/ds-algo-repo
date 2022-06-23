package kthsmallestelementbst
//Adewumi Sunkanmi 2022

// 230. Kth Smallest Element in a BST
// Medium

// 7365

// 135

// Add to List

// Share
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
 

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
 

// Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?


// Definition for a binary tree node.
  type TreeNode struct {
      Val int
      Left *TreeNode
	  Right *TreeNode
   }
 func kthSmallest(root *TreeNode, k int) int {
    n := 0;
    stack:=[]*TreeNode{}
    cur :=root
    for cur !=nil || len(stack) !=0 {
        for cur !=nil {
            stack = append(stack, cur)
            cur = cur.Left
        }
        cur, stack=stack[len(stack)-1], stack[0:len(stack)-1]
        n=n+1;
        if n == k {
            return cur.Val
        }
        cur= cur.Right;
    }
    return cur.Val
}