// Adewumi Sunkanmi 2022
// 98. Validate Binary Search Tree
// Medium
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
 var isValidBST = function(root) {
    function valid(node, left, right){
        if(!node){
            return true
        }
        
        if(!(node.val < right && node.val> left)){
            return false
        }
        return (valid(node.left, left, node.val) &&
        valid(node.right,node.val, right))
    }
    
    return valid(root,Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    
};