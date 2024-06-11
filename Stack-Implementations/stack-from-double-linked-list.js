// Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Stack Data Structure Implemetation using doubly linked list

const DoubleLinkedList   =  require('../Doubly-Linked-List/doubly-linked-list');


class Stack{
  constructor(){
      this.items= new DoubleLinkedList()
  }

  push(data){
    this.items.unshift(data)
    return true
  }

  pop(){
      return this.items.shift()
  }

  peek(index){
    if(index<0 || index> this.items.length-1)  return null
    
      return this.items.head
  }
  size(){
    return this.items.length
  }
}

const stack = new Stack()

module.exports=Stack
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack)
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.peek(0))
