package reorderlist
 type ListNode struct {
     Val int
     Next *ListNode
  }

func reorderList(head *ListNode)  {
    slow := head;
    fast:= head.Next;
    
    for fast!=nil && fast.Next !=nil{
        slow = slow.Next;
        fast= fast.Next.Next;
    }
    
    //reverse second partition
    second := slow.Next;
    slow.Next = nil
    
    var prev *ListNode;
    prev=nil;
    cur := second;
    for cur!=nil {
        next := cur.Next;
        cur.Next=prev
        prev=cur
        cur= next
    }
    first := head
    second = prev;
    for second!=nil{
        next1, next2 := first.Next, second.Next;
        first.Next=second
        second.Next= next1
        first=next1;
        second=next2;
    }
    
    
}