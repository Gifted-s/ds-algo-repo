const  LinkedList =  require("./linked-list");


class Stack{
  constructor(){
      this.items= new LinkedList()
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
    
      return this.items.get(index)
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
console.log(stack.pop())
console.log(stack)
console.log(stack.peek(0))
