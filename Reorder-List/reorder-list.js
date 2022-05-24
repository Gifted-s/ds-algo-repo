// Copyright Adewumi Sunkanmi 2022
// 143. Reorder List
// Medium

// 5942

// 217

// Add to List

// Share
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.



// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]


// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    let second = slow.next
    slow.next = null;
    let prev = null;
    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp
    }
    let first = head;
    second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2
    }
};