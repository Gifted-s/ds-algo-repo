// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn the Queue Data Structure Implemetation using array

class Queue{
  constructor(){
      this.items= []
  }
  size(){
    return this.items.length
  }
  enqueue(data){

    this.items.push(data)
    return true
  }

  dequeue(){
      return this.items.shift()
  }

  peek(){

    return this.items.head
  }

  isEmpty(){

    if(this.items.length>0) return false
    return true
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
//console.log(queue)
queue.dequeue()
queue.dequeue()
// queue.dequeue()
//console.log(queue)

module.exports = Queue