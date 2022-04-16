package queue_from_linked_list

import (
	"ds/Linked-List"
	"errors"
)

type Queue struct {
	list sl.SinglyLinkedList
}

// return size of queue O(1)
func (q *Queue) Size() int {
	return q.list.ListSize()
}

// check if queue is empty O(1)
func (q *Queue) IsEmpty() bool {
	return q.list.ListSize() == 0
}

// Peek operation is meant to check the element at the front of the queue O(1)
// throws an error if the queue is empty
func (q *Queue) Peek() (int, error) {
	if q.IsEmpty() {
		return 0, errors.New("Queue is Empty")
	}
	element, _ := q.list.PeekFirst()
	return element, nil
}

// Dequeue/Poll/Remove an element from the front of the queue O(1)
// Dequeue/Poll/Remove method throws an error if the queue is empty
func (q *Queue) Dequeue() (int, error) {
	if q.IsEmpty() {
		return 0, errors.New("Queue is Empty")
	}
	return q.list.RemoveHead(), nil
}

// Enqueue/Add an element to the back of the queue O(1)
// The Enqueue/Add method throws an error if the queue is empty
func (q *Queue) Enqueue(val int) bool {
	return q.list.Add(val)
}

// search for an element in the Queue 0(n)
//throws an error if the queue is empty
func (q *Queue) Contains(val int) (bool, error) {
	// check if queue is empty
	if q.IsEmpty() {
		return false, errors.New("Queue is empty")
	}
	return q.list.Contains(val), nil
}

// print queue as a string
func (q *Queue) PrintQueue() {
	q.list.PrintList()
}
