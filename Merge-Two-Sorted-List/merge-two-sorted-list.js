// Copyright Adewumi Sunkanmi 2022
// 21. Merge Two Sorted Lists
// Easy
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let head = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2;
            list2 = list2.next
        }
        head = head.next
    }
    if (list1) {
        head.next = list1
    } else {
        head.next = list2
    }
    return dummy.next;
};