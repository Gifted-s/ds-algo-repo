const  LinkedList =  require("./linked-list");


class Queue{
  constructor(){
      this.items= new LinkedList()
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
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue)
