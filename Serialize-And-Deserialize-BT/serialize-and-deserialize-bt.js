// Adewumi Sunkanmi 2022
// 297. Serialize and Deserialize Binary Tree
// Hard
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let result = []
    function dfs(node){
        if(!node){
           result.push("N")
           return null
        }
        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return result.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(",")
    let i = 0;
    function dfs(){
        if(values[i]==="N"){
            i+=1
            return null
        }
        let node = new TreeNode(parseInt(values[i]))
        i+=1;
        node.left = dfs()
        node.right= dfs()
        return node
    }
    return dfs()
    
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */