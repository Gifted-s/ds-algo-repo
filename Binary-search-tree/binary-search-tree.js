// Copyright Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Binary Search Tree Data Structure
const Queue = require("../Queue-Implentations/queue-from-array");

// The Node Contructor
class Node {
    constructor(left, right, data) {
        this.left = left
        this.right = right;
        this.data = data;
    }
}
class BST {
    constructor() {
        this.noOfComponents = 0;
        this.root = null
    }
    add(node, data) {
        // if there is no root then just set the root to the new node
        if (!this.root) {
            this.root = new Node(null, null, data)
        }
        // if a null node was found, set it to the new node
        else if (node == null) {
            node = new Node(null, null, data)
        }

        else {
            //  compare the data with each node's data
            let cmp = this.compare(node, data)
            // if data is less than the left subtree
            if (cmp < 0) {
                // recurse to the left subtree
                node.left = this.add(node.left, data)
            }
            else {
                // recurse to the right subtree
                node.right = this.add(node.right, data)
            }
        }
        // increment the number of nodes in the tree
        this.noOfComponents++
        return node
    }

    // this is especially usefull for printing elements in a tree in a sorted way
    inOrderTraversal(node) {
        if (node.left) {
            // recurse down the left subtree first
            node.left = this.inOrderTraversal(node.left)
        }
        // print data
        console.log(node.data)
        if (node.right) {
            // recurse down the right subtree
            node.right = this.inOrderTraversal(node.right)
        }


    }
    preOrderTraversal(node) {
        // print data
        console.log(node.data)
        if (node.left) {
            // recurse down the left subtree
            node.left = this.preOrderTraversal(node.left)
        }
        // recurse down the right subtree
        if (node.right) {
            node.right = this.preOrderTraversal(node.right)
        }

    }

    postOrderTraversal(node) {
        if (node.left) {
            // recurse dpen the left subtree
            node.left = this.postOrderTraversal(node.left)
        }

        if (node.right) {
            // recurse down the right subtree
            node.right = this.postOrderTraversal(node.right)
        }
        // print data
        console.log(node.data)
    }
    // This is also synonymous to Breath First Search(BFS) in the Graph Theory
    levelOrderTraversal() {
        // Create an empty queue
        const queue = new Queue()
        // enque the first node in the tree i.e root
        queue.enqueue(this.root)
        const data = []
        do {
            // deque the node at the front of the queue
            let node = queue.dequeue()
            data.push(node.data)
            // this will help us enque the children of each node into the queue to ensure they are reached
            for (let i of this.getNodeChildren(node)) {
                // ensure that the child is not null be for enqueing
                if (i !== null) {
                    queue.enqueue(i)
                }

            }
        } while (queue.size() > 0);
        // return final result
        return data
    }
    getNodeChildren(node) {
        let children = [node.left, node.right]
        return children
    }
    // this is to compare the data with the values in each node
    compare(node, data) {
        //console.log(node, "not bad")
        if (data < node.data) {
            return -1
        }
        else if (data > node.data) {
            return 1
        }
        return 2
    }
    remove(node, data) {
        // if node is null then return null: Base Case
        if (node === null) return null
        // compare the data entered to the data in the node
        let cmp = this.compare(node, data)
        // if the data is less than the data in the left subtree
        if (cmp === -1) {
            // recurse down the left subtree
            node.left = this.remove(node.left, data)
        }
        // if the data is greater than the data in the right subtree 
        else if (cmp === 1) {
            // recurse down the right subtree
            node.right = this.remove(node.right, data)
        }
        // is the data is equal to the data found on the node then it's found
        else if (cmp === 2) {
            // if the left child is null
            if (!node.left) {
                // assign a variable to the right child
                let rightNode = node.right
                node.data = null
                node = null// destroy the node 
                return rightNode // send back the right child to point to the parent of the removed node
            }
            // if the right child is null
            else if (!node.right) {
                // assign a variable to the left child
                let leftNode = node.left
                node.data = null
                node = null// destroy node
                return leftNode// send back the left node to point to the parent of the removed node
            }
            else {
                // if the node has both the right and left child
                //find the minimum node from the right subtree
                const minNodeOnRightChild = this.findMin(node.right)
                // set the data of the node to remove to the minimum node data
                node.data = minNodeOnRightChild.data
                // remove the minimum node to avoid duplicates
                node.right = this.remove(node.right, minNodeOnRightChild.data)
            }

        }
        // reduce component size by 1
        this.noOfComponents--
        // return node
        return node

    }
    // this is the helper function that helps us find the minimum node 
    findMin(node) {
        if (node.left !== null) {
            node.left = this.findMin(node.left)
        }
        return node
    }
   // get the depth of the tree
    getDepth(node) {
        if (!node) return 0
        return Math.max(this.getDepth(node.left), this.getDepth(node.right)) + 1
    }
}

const bst = new BST()

bst.add(bst.root, 11)
bst.add(bst.root, 6)
bst.add(bst.root, 15)
bst.add(bst.root, 3)
bst.add(bst.root, 8)
bst.add(bst.root, 1)
bst.add(bst.root, 5)
bst.add(bst.root, 13)
bst.add(bst.root, 17)
bst.add(bst.root, 12)
bst.add(bst.root, 14)
bst.add(bst.root, 19)

//bst.inOrderTraversal(bst.root)
//bst.preOrderTraversal(bst.root)
//bst.postOrderTraversal(bst.root)

//bst.remove(bst.root,17)
//bst.inOrderTraversal(bst.root)
//console.log(bst.getDepth(bst.root))
//console.log(bst.levelOrderTraversal())