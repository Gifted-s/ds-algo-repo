// Copyright Adewumi Sunkanmi 2022
// 25. Reverse Nodes in k-Group
// Hard
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
 

// Follow-up: Can you solve the problem in O(1) extra memory space?

// Accepted
// 525.1K

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;
    while(true){
        let kth = getKthNode(k, groupPrev)
        if(!kth){
            break
        }
        let groupNext= kth.next;
        let prev = kth.next
        let cur = groupPrev.next;
        while(cur !== groupNext){
            let temp = cur.next;
            cur.next = prev;
            prev= cur;
            cur=temp;
        }
        let tem = groupPrev.next
        groupPrev.next = kth
        groupPrev=tem;
    }
    
return dummy.next;
};

function getKthNode(k, cur){
    while(cur && k>0){
        cur= cur.next
        k-=1   
    }
    return cur
}