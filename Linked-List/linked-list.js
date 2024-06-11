// Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Linked List Data Structure
class Node{
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
}

 class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

// unshift
    unshift(data){
        const newHead = new Node(data, this.head)
        this.head=newHead
        this.length++
    }
// getFirst
    getFirst(){
        return this.head
    }
// getLast
    getLast(){
        let currentNode= this.head;
        while(currentNode && currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode
    }
// clear
   clear(){
       this.head= null
       this.length=0
       return this.head
   }
// shift
   shift(){
    if(!this.head){
      return null
    }
    if(!this.head.next){
        let head = this.head
        this.head = null
        return head
    }

    const removedNode= this.head
    this.head= this.head.next
    this.length--
    return removedNode
   }
// pop
   pop(){
    this.length--
    if(!this.head){
        return null
    }
    if(!this.head.next){
        return this.head
    }

    let currentNode=this.head
    const lastNode = this.getLast()
    while(currentNode.next !== lastNode){
        currentNode = currentNode.next
    }
    currentNode.next=null
    return lastNode
   }
// push
   push(data){
    if(!this.head){
        return this.unshift(data)
    }
    const newNode = new Node(data,null)
    const lastNode = this.getLast()
    lastNode.next= newNode
    this.length++
   }
// get
   get(index){
       if(index<0 || index>this.length-1) return false
       let count=0;
       let currentNode= this.head
       while(count<index){
           currentNode=currentNode.next
           count++
       }
       return currentNode
   }
  
// set
   set(data,index){
       if(index<0 || index>this.length-1) return false
       const nodeToReplace = this.get(index)
       nodeToReplace.data=data
       return true
   }
// remove
   remove(index){
    if(index===0) {
        this.shift()
        return true
    }
    if(index<0 || index>this.length-1) return false
    const prevNode =  this.get(index-1)
    prevNode.next= prevNode.next.next
    this.length--
    return true
   }
// insert
   insert(data,index){
    if(index===0) {
        this.unshift(data)
        return true
    }
    if(index<0 || index>this.length-1) return false
    const prevNode =  this.get(index-1)
    prevNode.next= new Node(data, prevNode.next)
    this.length++
    return true
   }

    
}

const linkedList = new LinkedList()

// linkedList.unshift('LT2 Lecture Theater')
// linkedList.unshift('SEET Building')
// linkedList.unshift('SUB Building')
// linkedList.unshift('North Gate')
// linkedList.unshift('New Castle Lodge')
// linkedList.unshift('Winterfell Lodge')
// linkedList.unshift('Kingsand Queen')
// console.log(linkedList.pop())
// console.log(linkedList.get(5))

module.exports= LinkedList