package binarytreerightsideview
// Adewumi Sunkanmi 2022
//199. Binary Tree Right Side View
// Medium

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

  type TreeNode struct {
     Val int
     Left *TreeNode
     Right *TreeNode
 }

 func rightSideView(root *TreeNode) []int {
    queue:= []*TreeNode{root};
    result := []int{};
    
    for len(queue) >0{
        queueLength := len(queue);
        var rightNode *TreeNode
        for i:=0; i< queueLength;i++{
            node:= queue[0]
            queue=queue[1:];
            if node != nil{
                rightNode=node;
                queue = append(queue, node.Left);
                queue = append(queue, node.Right);
            }
        }
        if rightNode!=nil{
             result = append(result, rightNode.Val);
        }
    }
    
    return result;
}