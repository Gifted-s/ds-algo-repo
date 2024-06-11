// Copyright Adewumi Sunkanmi 2022
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;// to store addition operation carry
    let dummy = new ListNode();
    let cur = dummy;
    while(l1 || l2 || carry){
        let v1 = l1?.val || 0;
        let v2 = l2?.val || 0;
        let val = v1 + v2 + carry;
        carry = Math.floor(val/10); 
        let valToStore = val % 10;
        cur.next = new ListNode(valToStore);
        cur = cur.next;
        l1= l1?.next || null
        l2 = l2?.next || null
    }
    
    return dummy.next;
};