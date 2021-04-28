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
    peek(){
        if(index<0 || index> this.items.length-1)  return null
            return this.items[0]
    }  
    size() {
        return this.items.length
    } 
}

// const StackAsArray =  Stack

module.exports  = Stack
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.peek(0))

