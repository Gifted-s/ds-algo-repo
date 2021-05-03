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

console.log(JSON.stringify(bst))