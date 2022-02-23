package stack_from_linked_list

import (
	"ds/Linked-List"
	"errors"
)

type Stack struct {
	list sl.SinglyLinkedList
}

// returns the number of elements in the stack
func (s *Stack) Size() int {
	return s.list.ListSize()
}

// check if stack is empty
func (s *Stack) IsEmpty() bool {
	return s.Size() == 0
}

// push an element on the stack
func (s *Stack) Push(elem int) bool {
	s.list.AddToHead(elem)
	return true
}

// pop an element from the stack 0(1)
func (s *Stack) Pop() (bool, error) {

	// check if stack is empty
	if s.IsEmpty() {
		return false, errors.New("Stack is empty")
	}
	s.list.RemoveHead()
	return true, nil
}

// checkout what is at the head without removing it 0(1)
func (s *Stack) Peek() (int, error) {
	// check if stack is empty
	if s.IsEmpty() {
		return 0, errors.New("Stack is empty")
	}
	return s.list.Get(0), nil
}

// search for an element in the stack 0(n)
func (s *Stack) Search(elem int) (bool, error) {

	// check if stack is empty
	if s.IsEmpty() {
		return false, errors.New("Stack is empty")
	}
	return s.list.Contains(elem), nil
}

// print stack as a string
func (s *Stack) PrintStack() {
	s.list.PrintList()
}

