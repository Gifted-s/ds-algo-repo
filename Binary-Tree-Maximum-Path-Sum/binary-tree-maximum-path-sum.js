// Adewumi Sunkanmi 2022
// 124. Binary Tree Maximum Path Sum
// Hard

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let result = root.val
    
    function dfs(root){
        if(!root){
            return 0
        }
        let leftPathSum = dfs(root.left)
        let rightPathSum = dfs(root.right)
        leftPathSum = Math.max(leftPathSum, 0)
        rightPathSum = Math.max(rightPathSum, 0)
        // calculate sum with split
        let splitSum = root.val + leftPathSum + rightPathSum
        result= Math.max(result,splitSum)
        return root.val + Math.max(leftPathSum, rightPathSum)
    }
    dfs(root)
    
    return result
};