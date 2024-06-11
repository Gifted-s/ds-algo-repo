// Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Binary Search Tree Data Structure
class Node {
    constructor(left, data, right) {
        this.left = left;
        this.data = data;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node(null, data, null)
        if (!this.root) {
            this.root = node
            return
        }
        let current = this.root
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = node
                    return
                }
                current = current.left
            }

            else {
                if (current.right === null) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }

     
    remove(value){
        this.root = this.removeNode(this.root, value)
    }
    // a recursive function to insert a new value in binary search tree
    
    removeNode(current, value) {
        
        // base case, if the tree is empty 
        
       if(current === null) return current
        
        // when value is the same as current's value, this is the node to be deleted
        
        if (value === current.value) {
             
            // for case 1 and 2, node without child or with one child
            
            if (current.left === null && current.right === null){
                
                    return null
                
                }else if(current.left === null){
                
                    return current.right 
             
                }else if(current.right === null){
                
                    return current.left
                
                }else{
                    
                    /// node with two children, get the inorder successor, 
                    //smallest in the right subtree
                    
                    let tempNode = this.kthSmallestNode(current.right)
                        current.value = tempNode.value
                    
                    /// delete the inorder successor
                    
                        current.right = this.removeNode(current.right, tempNode.value)
                    return current
            }

        // recur down the tree
            
        }else if(value < current.value) {
            
            current.left = this.removeNode(current.left, value)
            return current
            
        }else{
            
            current.right = this.removeNode(current.right, value)
            return current
        }
    }
    
     /// helper function to find the smallest node
    
    kthSmallestNode(node) {
        while(!node.left === null)
            node = node.left

        return node
    }


    
}

// traversal functions

function inOrderTraversal(root){
    if(root === null){
        return []
    }
    const result=[]
    if(root.left !== null){result.push(...inOrderTraversal(root.left))}
    result.push(root.data)
    if(root.right !== null){ result.push(...inOrderTraversal(root.right))}
    return result
}



function preOrderTraversal(root){
    if(root === null){
        return []
    }
    const result=[]
    result.push(root.data)
    if(root.left !== null){result.push(...preOrderTraversal(root.left))}
    if(root.right !== null){ result.push(...preOrderTraversal(root.right))}
    return result
}


function postOrderTraversal(root){
    if(root === null){
        return []
    }
    const result=[]
    
    if(root.left !== null){result.push(...postOrderTraversal(root.left))}
    if(root.right !== null){ result.push(...postOrderTraversal(root.right))}
    result.push(root.data)
    return result
}


const bst =new BST()

bst.insert(5)
bst.insert(43)
bst.insert(1)
bst.insert(8)
bst.insert(89)
bst.insert(12)
bst.insert(9)
bst.insert(54)
bst.insert(4)
bst.insert(2)
console.log()
// console.log(JSON.stringify(bst))

console.log(inOrderTraversal(bst.root))
console.log(preOrderTraversal(bst.root))
console.log(postOrderTraversal(bst.root))