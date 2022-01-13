 package main

// import (
// 	"fmt"
// 	"log"
// 	"strconv"
// )

// type DoublyLinkedList struct {
// 	size int
// 	head *Node
// 	tail *Node
// }

// type Node struct {
// 	prev *Node
// 	data int
// 	next *Node
// }

// func (list *DoublyLinkedList) Clear() bool {
// 	trav := list.head
// 	if list.IsEmpty() {
// 		return true
// 	}
// 	for trav != nil {
// 		next := trav.next
// 		trav.next, trav.prev = nil, nil

// 		trav = next
// 	}
// 	list.head, list.tail, trav = nil, nil, nil
// 	list.size = 0
// 	return true
// }

// func (list *DoublyLinkedList) ListSize() int {
// 	return list.size
// }

// func (list *DoublyLinkedList) IsEmpty() bool {
// 	return list.ListSize() == 0
// }

// func (list *DoublyLinkedList) Add(data int) bool {
// 	return list.AddLast(data)
// }

// // add an element to the head of a doubly linked list 0(1)
// func (list *DoublyLinkedList) AddFirst(data int) bool {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		newNode := &Node{nil, data, nil}
// 		list.head, list.tail = newNode, newNode
// 	} else {
// 		list.head.prev = &Node{nil, data, list.head}
// 		list.head = list.head.prev
// 	}
// 	list.size = list.size + 1
// 	return true
// }

// // add an element to the tail of a doubly linked list 0(1)
// func (list *DoublyLinkedList) AddLast(data int) bool {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		newNode := &Node{nil, data, nil}
// 		list.head, list.tail = newNode, newNode
// 	} else {
// 		list.tail.next = &Node{list.tail, data, nil}
// 		list.tail = list.tail.next
// 	}
// 	list.size = list.size + 1
// 	return true
// }

// // check the value of the first node if it exists, 0(1)
// func (list *DoublyLinkedList) PeekFirst() int {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		log.Fatal("Empty List")
// 		return 0
// 	} else {
// 		return list.head.data
// 	}
// }

// // check the value of the last node if it exists, 0(1)
// func (list *DoublyLinkedList) PeekLast() int {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		log.Fatal("Empty List")
// 		return 0
// 	} else {
// 		return list.tail.data
// 	}
// }

// //  remove the first value at the head of a doubly-linked list, 0(1)
// func (list *DoublyLinkedList) RemoveFirst() int {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		log.Fatal("Empty List")
// 	}
// 	data := list.head.data
// 	list.head = list.head.next
// 	list.head.prev = nil

// 	if list.IsEmpty() {
// 		list.tail = nil
// 	}
// 	list.size = list.size - 1
// 	return data
// }

// //  remove the last value at the tail of a doubly-linked list, 0(1)
// func (list *DoublyLinkedList) RemoveLast() int {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		log.Fatal("Empty List")
// 	}
// 	data := list.head.data
// 	list.tail = list.tail.prev
// 	list.tail.next = nil

// 	if list.IsEmpty() {
// 		list.head = nil
// 	}
// 	list.size = list.size - 1
// 	return data
// }

// //  remove a particular node from the linked list 0(1)
// func (list *DoublyLinkedList) Remove(node *Node) int {
// 	// check if the node is somewhere at the tail or at the head
// 	if node.prev == nil {
// 		return list.RemoveFirst()
// 	}
// 	if node.next == nil {
// 		return list.RemoveLast()
// 	}
// 	// make pointers of adjacent nodes skip over "node"
// 	node.next.prev = node.prev
// 	node.prev.next = node.next
// 	// reduce size by one
// 	list.size = list.size - 1
// 	data := node.data
// 	// memory clean up
// 	node.prev, node.next = nil, nil
// 	return data
// }

// //  remove a node at a particular index 0(n)
// func (list *DoublyLinkedList) RemoveAt(index int) int {
// 	var trav *Node
// 	// check the index range and make sure its valid
// 	if index < 0 || index > list.size {
// 		log.Fatal("Illegal Argument: Index is not within range")
// 	}
// 	// if index is less than half the size of the link list, search from the front
// 	if index < list.size/2 {
// 		for i, trav := 0, list.head; i != index; i++ {
// 			trav = trav.next
// 		}
// 	}
// 	// if index is greater than half the size of the link list, search from the back
// 	if index > list.size/2 {
// 		for i, trav := 0, list.tail; i != index; i++ {
// 			trav = trav.prev
// 		}
// 	}

// 	return list.Remove(trav)
// }

// // get index of a value in the linked list, 0(n)
// func (list *DoublyLinkedList) IndexOf(val int) int {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		log.Fatal("Empty List")
// 	}
// 	trav := list.head
// 	index := 0
// 	for trav != nil {
// 		if trav.data == val {
// 			return index
// 		}
// 		trav = trav.next
// 		index = index + 1
// 	}

// 	return -1
// }

// // check if a linked list contains a value, 0(n)
// func (list *DoublyLinkedList) Contains(val int) bool {
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		return false
// 	}
// 	trav := list.head
// 	for trav != nil {
// 		if trav.data == val {
// 			return true
// 		}
// 		trav = trav.next
// 	}

// 	return false
// }

// // Print the linked list as a string
// func (list *DoublyLinkedList) ToString() string {
// 	list_to_string := ""
// 	// the linked list is empty
// 	if list.IsEmpty() {
// 		return ""
// 	}
// 	trav := list.head
// 	for trav != nil {
// 		if trav.next != nil {
// 			fmt.Print(trav.data)
// 			list_to_string = list_to_string + strconv.Itoa(trav.data) + " -> "
// 		}
// 		list_to_string += strconv.Itoa(trav.data)
// 		trav = trav.next
// 	}

// 	return list_to_string
// }

// func main() {
// 	list := DoublyLinkedList{}
// 	list.AddFirst(5)
// 	list.AddFirst(3)
// 	list.AddFirst(7)
// 	list.AddFirst(1)
// 	list.ToString()
// 	// fmt.Println(list.ToString())

// }
