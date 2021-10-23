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
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
      // create temp_linked_list from head
      ListNode* list = new ListNode(0);
      list->next = head;
      // create a fast node that sarts from head
      ListNode* fast = list;
      // create a slow node that starts from head node
      ListNode* slow = list;
      int count = 0;
      // make fast node start from node at n+1
      int end = n+1;
      while(count < end){
        fast = fast->next;
        count++;
      }
      // while fast is not null continue to set slow to next
      while(fast){
      // set slow next node to  slow next next node
      slow= slow->next;
      fast= fast->next;
      }
     slow->next = slow->next->next;
     return list->next;
    }
       
};