class Stack{
    constructor(){
        this.items=[]
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        return this.items.pop()
    }
    peek(index){
        if(index<0 || index> this.items.length-1)  return null
            return this.items[this.items.length-1 - index]
    }   
}

const stack= new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)
console.log(stack.peek(0))

