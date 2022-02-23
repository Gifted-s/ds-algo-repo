package sl

import (
	"fmt"
	"log"
)
type SinglyLinkedList struct {
	size int
	head *Node
	tail *Node
}

type Node struct {
	data int
	next *Node
}

// clear linked list 0(n)
func (list *SinglyLinkedList) Clear() bool {
	trav := list.head
	if list.IsEmpty() {
		return true
	}
	for trav != nil {
		next := trav.next
		trav.next = nil
		trav = next
	}
	list.head, list.tail, trav = nil, nil, nil
	list.size = 0
	return true
}

// check if index is valid
func (list *SinglyLinkedList) IndexValid(index int) bool {
	if index < 0 || index > list.size-1 {
		return false
	}
	return true
}

// return list size
func (list *SinglyLinkedList) ListSize() int {
	return list.size
}

// check if linked-list is empty
func (list *SinglyLinkedList) IsEmpty() bool {
	return list.ListSize() == 0
}

// add to the end of a  linked list 0(n)
func (list *SinglyLinkedList) Add(val int) bool {

	if list.IsEmpty() {
		list.head = &Node{val, nil}
		list.tail = list.head
		list.size += 1
		return true
	}
	newNode := &Node{val, nil}
	list.tail.next = newNode
	list.tail = newNode
	list.size += 1
	return true
}

// remove last element element from the linked list 0(n)
func (list *SinglyLinkedList) RemoveLast() int {
	if list.head == nil {
		log.Fatal("Empty List")
	}
	trav := list.head
	new_tail := list.tail
	for trav.next != nil {
		new_tail = trav
		trav = trav.next
	}
	new_tail.next = nil
	list.tail = new_tail
	data := trav.data
	trav = nil
	list.size--
	if list.size == 0 {
		list.head = nil
		list.tail = nil
	}
	return data
}

// remove first element in the linked list 0(1)
func (list *SinglyLinkedList) RemoveHead() int {
	if list.IsEmpty() {
		log.Fatal("Empty List")
	}
	prev_head := list.head
	data := prev_head.data
	if prev_head.next == nil {
		list.head = nil
		list.tail = nil
		list.size = 0
		return data
	}
	list.head = prev_head.next
	prev_head = nil
	list.size -= 1
	return data
}

// add element to the head of a linked list 0(1)
func (list *SinglyLinkedList) AddToHead(val int) int {
	if list.head == nil {
		newNode := &Node{val, nil}
		list.head = newNode
		list.tail = newNode
		list.size = 1
		return val
	}
	newNode := &Node{val, list.head}
	list.head = newNode
	list.size += 1
	return val
}

// get element at a particulr node 0(n)
func (list *SinglyLinkedList) Get(index int) int {
	if list.IsEmpty() {
		log.Fatal("Empty List")
	}
	if !list.IndexValid(index) {
		log.Fatal("[Invalid Index] index should not be less than 0 or greater than list size-1")
	}
	trav := list.head
	for i := 0; i < index; i++ {
		trav = trav.next
	}
	return trav.data
}

// remove element at a particular position 0(n)
func (list *SinglyLinkedList) Remove(index int) int {
	if list.IsEmpty() {
		log.Fatal("Empty List")
	}
	if !list.IndexValid(index) {
		log.Fatal("[Invalid Index] index should not be less than 0 or greater than list size-1")
	}
	if index == 0 {
		return list.RemoveHead()
	}
	if index == list.size-1 {
		return list.RemoveLast()
	}
	trav := list.head
	prev_node := list.head
	for i := 0; i < index; i++ {
		prev_node = trav
		trav = trav.next
	}
	data := trav.data
	prev_node.next = trav.next
	trav = nil
	list.size -= 1
	return data
}

// get index of a value in the linked list, 0(n)
func (list *SinglyLinkedList) IndexOf(val int) int {
	// the linked list is empty
	if list.IsEmpty() {
		log.Fatal("Empty List")
	}
	trav := list.head
	index := 0
	for trav != nil {
		if trav.data == val {
			return index
		}
		trav = trav.next
		index = index + 1
	}

	return -1
}

// check if a linked list contains a value, 0(n)
func (list SinglyLinkedList) Contains(val int) bool {
	// the linked list is empty
	if list.IsEmpty() {
		return false
	}
	trav := list.head
	for trav != nil {
		if trav.data == val {
			return true
		}
		trav = trav.next
	}
	return false
}

func (list *SinglyLinkedList) PrintList() {
	trav := list.head
	for trav != nil {
		fmt.Print(trav.data)
		trav = trav.next
	}
}


