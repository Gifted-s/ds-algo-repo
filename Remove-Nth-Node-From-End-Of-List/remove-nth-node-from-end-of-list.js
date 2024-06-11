//  Adewumi Sunkanmi 2022
// 19. Remove Nth Node From End of List
// Medium

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.



// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head)
    let left = dummy;
    let right = head
    while (n > 0 && right) {
        right = right.next
        n -= 1
    }

    while (right) {
        left = left.next
        right = right.next
    }
    left.next = left.next.next;
    return dummy.next;
};