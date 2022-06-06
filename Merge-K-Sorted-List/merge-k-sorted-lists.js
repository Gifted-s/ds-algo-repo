// Copyright Adewumi Sunkanmi 2022
// 23. Merge k Sorted Lists
// Hard

// 12413

// 481

// Add to List

// Share
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.



// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []


// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) {
        return null
    }

    while (lists.length > 1) {
        let mergedList = []
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]
            let l2 = lists[i + 1] ? lists[i + 1] : null
            mergedList.push(mergeTwoLists(l1, l2))
        }
        lists = mergedList
    }
    return lists[0]

};

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode()
    let head = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1
            l1 = l1.next;
        } else {
            head.next = l2
            l2 = l2.next;
        }
        head = head.next;
    }
    if (l1) {
        head.next = l1
    }
    if (l2) {
        head.next = l2
    }

    return dummy.next;
}