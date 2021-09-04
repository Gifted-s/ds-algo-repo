const DoubleLinkedList = require("./doubly-linked-list");



class Queue{
  constructor(){
      this.items= new DoubleLinkedList()
  }

  enqueue(data){

    this.items.unshift(data)
    return true
  }

  dequeue(){

      return this.items.pop()
  }

  peek(){

    return this.items.head
  }

  isEmpty(){

    if(this.items.length>0) return false
    return true
  }
  size(){
    return this.items.length
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
// console.log(queue)
queue.dequeue()
queue.dequeue()
// queue.dequeue()
//console.log(queue)

// module.exports = Queue