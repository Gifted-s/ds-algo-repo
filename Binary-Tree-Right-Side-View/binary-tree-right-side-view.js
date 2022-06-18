
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
 * @return {number[]}
 */
 var rightSideView = function(root) {
  
    if(!root){
        return []
    }
    let result =[]
    let queue = [root]
    while(queue.length>0){
        
        let n = queue.length;
        let rightNode;
        for(let i=0;i<n; i++){
            let node = queue.shift()
            if(node){
                rightNode = node
                queue.push(node.left)
                queue.push(node.right)
               }
        }       
        if(rightNode){
             result.push(rightNode.val)
        }
    }
     return result 
    
};