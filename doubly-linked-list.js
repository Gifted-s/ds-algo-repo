class Node {
    constructor(previous, data, next) {
        this.previous = previous
        this.data = data;
        this.next = next
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }
    unshift(data) {
        if (!this.head) {
            const newNode = new Node(null, data, this.head)
            this.head = newNode
            this.tail = this.head
            this.length++
        }
        else {
            const formerHeadNode = this.head
            const newNode = new Node(null, data, this.head)
            this.head = newNode
            formerHeadNode.previous = newNode
            this.length++
        }
    }

    // getFirst
    getFirst() {
        return this.head
    }
    // getLast
    getLast() {
        return this.tail
    }
    // clear
    clear() {
        this.head = null
        this.tail = null
        this.length = 0
        return this.head
    }
    // shift
    shift() {
        if (!this.head) {
            return null
        }
        if (this.length == 1) {
            const formerHead = this.head;
            this.head = null
            this.tail = null
            this.length--
            return formerHead
        }
        const formerHead = this.head;
        this.head = this.head.next
        this.head.previous = null
        this.length--
        return formerHead
    }
    // pop
    pop() {
        if (!this.head.next) {
            return this.shift()
        }
        if (!this.head) return null
        this.length--
        const lastNode = this.tail
        this.tail.previous.next = null
        this.tail = this.tail.previous
        return lastNode
    }
    // push
    push(data) {
        if (!this.head) {
            return this.unshift(data)
        }
        let lastNode = this.tail
        const newNode = new Node(lastNode, data, null)
        lastNode.next = newNode
        this.tail = newNode
        this.length++
    }


    // get
    get(index) {
        if (index < 0 || index > this.length - 1) return false
        let count = 0;
        let currentNode = this.head
        while (count < index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }

    // set
    set(data, index) {
        if (index < 0 || index > this.length - 1) return false
        const nodeToReplace = this.get(index)
        nodeToReplace.data = data
        return true
    }

    size() {
        return this.length
    }

    // remove
    remove(index) {
        if (index === 0) {
            this.shift()
            return true

        }
        if (index < 0 || index > this.length - 1) return false
        let prevNode = this.get(index)
        prevNode.previous.next = prevNode.next
        prevNode = null
        return true
    }


    // insert
    insert(data, index) {
        if (index === 0) {
            this.unshift(data)
            return true

        }

        if (index < 0 || index > this.length) return false

        if (index == this.length) {
            this.push(data)
            return true
        }
        else {
            const prevNode = this.get(index - 1)
            const newNode = new Node(prevNode, data, prevNode.next)
            prevNode.next = newNode
            this.length++
            return true
        }



    }
}



const doubleLinkedListSample = new DoubleLinkedList()
// doubleLinkedListSample.push(9)
// doubleLinkedListSample.push(1)
// doubleLinkedListSample.push(2)
// // doubleLinkedListSample.push(0)
// console.log(doubleLinkedListSample)
// console.log(doubleLinkedListSample.pop())
// console.log(doubleLinkedListSample)
// doubleLinkedListSample.insert(10,2)
// console.log(doubleLinkedListSample)
// console.log(doubleLinkedListSample.pop())
// console.log(doubleLinkedListSample.getLast())
// c

module.exports = DoubleLinkedList