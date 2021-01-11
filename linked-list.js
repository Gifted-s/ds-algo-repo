class Node{
  constructor(data, next){
     this.next = next;
     this.data = data;
  }
}

class LinkedList{
       constructor(){
            this.head = null;
            this.length=0
       }
    unshift(data){
        const newHead = new Node(data, this.head);
        this.head = newHead;
        this.length++;
        
     }
     getFirst(){
         return this.head;
     }
     shift(){
         if(!this.head){
             return
         }
         const oldHead = this.head;
         this.head = this.oldHead.next;
         this.length--;
         return oldHead;
     }
     getLast(){
         let currentNode = this.head;
         while( currentNode  && currentNode.next){
             currentNode = currentNode.next;
         }
         return currentNode;
     }
     clear(){
        this.head=null;
        this.length  = 0;
     }
     pop(){
         if(!this.head){
             return 
         }
         if(this.length==1){
             return this.shift()
         }
         const last = this.getLast()
         let currentNode = this.head;
         while(currentNode.next != last){
          currentNode = currentNode.next;
         }
         currentNode.next = null;
         this.length--;
         return last
     }
     push(data){
         const newNode = new Node(data, null)
         if (!this.head){
             return this.unshift(data)
         }
         let last = this.getLast()
         last.next = newNode;
         this.length++;
     }
     get(index){
         if(index < 0 || index> this.length){
             return null
         }
         let counter= 0;
         let currentNode = this.head
         while (counter< index) {
             currentNode = currentNode.next
             counter++
         }

         return currentNode
     }
     set(data, index){
         if(!this.get(index)){
             return false
         }
         let node = this.get(index)
         node.data = data
         return true
     }

     remove(index){
      if(!this.get(index)){
          return false
      }
      if(index ===0 ){
        return this.shift()
    }
      const prevNode = this.get(index-1)
      const nodeToRemove = this.get(index)
      prevNode.next = nodeToRemove.next;
      this.length--
      return nodeToRemove
     }
     insert(data, index){
         if(index > this.length || index <0 ){
             return false
         }
         if(index===0){
             this.unshift(data)
             return true
         }
         const prevNode = this.get(index-1)
         const nodeToReplace = this.get(index)
         prevNode.next = new Node(data, nodeToReplace)
         this.length++
         return true


     }


}

