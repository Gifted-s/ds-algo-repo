// Given a linked list, swap every two adjacent nodes and return its head. 
//You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    // create new linked list  with empty value at first
    let temp_linked_list = {val :0, next:null}
    // set newlinked list head.next to be head from params
    temp_linked_list.next = head
    // set current to be newlinkedlist
    let current = temp_linked_list
    // loop through temp linked list
    while(current.next !== null && current.next.next !== null){
            // create firstnode to be current.next
            let firstnode = current.next;

            // create secondnode to be current.next.next
            let secondnode = current.next.next

            // set firstnode.next node  to secondnode.next node
            firstnode.next = secondnode.next

            // set current.next to secondnode
            current.next = secondnode

            // set current.next.next to firstnode
            current.next.next= firstnode

            //set current node to current.next.next ton iterate
            current= current.next.next
     
    }
   // return temp.next
    return temp_linked_list.next
};