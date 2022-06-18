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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    function dfs(root){
        if(!root){
            return [true, 0]
        }
        let left = dfs(root.left), right= dfs(root.right);
        let balanced = ( left[0] && right[0] && (Math.abs(left[1] - right[1]) <=1)  )
        return [balanced, 1+ (Math.max(left[1], right[1]))]
    }
    
    return dfs(root)[0]
};