package main

import (
	"testing"
)

func TestSinglyList(t *testing.T) {

	t.Run("Contains Method", func(t *testing.T) {

		t.Run("Expect Contains methods to return false if the element is not present", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			if new_list.Contains(1) != false {
				t.Fail()
			}

		})

		t.Run("Expect Contains methods to return true if the element is present in the list", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			if new_list.Contains(3) != true {
				t.Fail()
			}
		})
	})

	t.Run("ListSize Method", func(t *testing.T) {

		t.Run("Expect ListSize method to return size of List", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			if new_list.ListSize() != 0 {
				t.Fail()
			}
			new_list.Add(3)
			new_list.Add(4)
			if new_list.ListSize() != 2 {
				t.Fail()
			}
		})
	})

	t.Run("Clear Method", func(t *testing.T) {

		t.Run("Expect Clear to clear the entire List", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			if new_list.Clear() != true {
				t.Fail()
			}
			if new_list.head != nil {
				t.Fail()
			}
			if new_list.tail != nil {
				t.Fail()
			}
		})

		t.Run("Expect Size to be 0 after clearance", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Clear()
			if new_list.ListSize() != 0 {
				t.Fail()
			}
		})
	})

	t.Run("Add Method", func(t *testing.T) {

		t.Run("Expect Add to return true after successful insertion", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			if new_list.Add(3) != true {
				t.Fail()
			}
			if new_list.Add(4) != true {
				t.Fail()
			}
		})
		t.Run("Expect Size to increase by one after each addition", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			if new_list.ListSize() != 1 {
				t.Fail()
			}
			new_list.Add(4)
			if new_list.ListSize() != 2 {
				t.Fail()
			}
		})

		t.Run("Expect List to Contain added element", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			if new_list.Contains(3) != true {
				t.Fail()
			}
		})

	})

	t.Run("RemoveLast Method", func(t *testing.T) {

		t.Run("Expect RemoveLast to return last element", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			if new_list.RemoveLast() != 4 {
				t.Fail()
			}
		})

		t.Run("Expect List not to contain removed element", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveLast()
			if new_list.Contains(4) != false {
				t.Fail()
			}
		})

		t.Run("Expect list new tail to be element before tail after removal", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveLast()
			if new_list.tail.data != 3 {
				t.Fail()
			}
		})

		t.Run("Expect Size to be reduced by one after removal", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveLast()
			if new_list.size != 2 {
				t.Fail()
			}
		})

	})

	t.Run("RemoveHead Method", func(t *testing.T) {

		t.Run("Expect RemoveHead to return value at head", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			if new_list.RemoveHead() != 2 {
				t.Fail()
			}
		})

		t.Run("Expect List not to contain removed element", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveHead()
			if new_list.Contains(2) != false {
				t.Fail()
			}
		})

		t.Run("Expect list new head to be element next to head after removal", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveHead()
			if new_list.head.data != 3 {
				t.Fail()
			}
		})

		t.Run("Expect Size to be reduced by one after removal", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.RemoveHead()
			if new_list.size != 2 {
				t.Fail()
			}
		})

	})

	t.Run("AddToHead Method", func(t *testing.T) {

		t.Run("Expect AddToHead to return value at head", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			if new_list.AddToHead(2) != 2 {
				t.Fail()
			}
			if new_list.AddToHead(3) != 3 {
				t.Fail()
			}
		})

		t.Run("Expect both head and tail to point to thesame node if list is empty", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.AddToHead(2)
			if new_list.head.data != 2 && new_list.tail.data != 2 {
				t.Fail()
			}
		})

		t.Run("Expect element to be the first in the list", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.AddToHead(2)
			if new_list.head.data != 2 {
				t.Fail()
			}
		})

		t.Run("Expect Size to increase by one", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.AddToHead(4)
			if new_list.size != 3 {
				t.Fail()
			}
		})

	})

	t.Run("Get Method", func(t *testing.T) {

		t.Run("Expect Get to return value at a particular index", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(1)
			new_list.Add(2)
			new_list.Add(3)
			if new_list.Get(0) != 1 {
				t.Fail()
			}
			if new_list.Get(1) != 2 {
				t.Fail()
			}
			if new_list.Get(2) != 3 {
				t.Fail()
			}
		})

	})

	t.Run("Remove Method", func(t *testing.T) {

		t.Run("Expect Remove to return value removed", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Add(6)
			new_list.Add(7)

			if new_list.Remove(1) != 4 {
				t.Fail()
			}
		})

		t.Run("Expect Size to reduce by one", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			if new_list.size != 4 {
				t.Fail()
			}
			new_list.Remove(1)
			if new_list.size != 3 {
				t.Fail()
			}
		})

		t.Run("Expect element to be removed from the linked list", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(2)
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Remove(2)
			if new_list.Contains(4) != false {
				t.Fail()
			}
		})

	})

	t.Run("IndexOf Method", func(t *testing.T) {

		t.Run("Expect indexOf to return index of a value in the linked list", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Add(6)
			new_list.Add(7)

			if new_list.IndexOf(3) != 0 {
				t.Fail()
			}
			if new_list.IndexOf(4) != 1 {
				t.Fail()
			}
			if new_list.IndexOf(5) != 2 {
				t.Fail()
			}
			if new_list.IndexOf(6) != 3 {
				t.Fail()
			}
			if new_list.IndexOf(7) != 4 {
				t.Fail()
			}
		})


		t.Run("Expect indexOf to return -1 if element is not in the linked list", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Add(6)
			new_list.Add(7)

			if new_list.IndexOf(10) != -1 {
				t.Fail()
			}
		})

	})



	t.Run("IndexValid Method", func(t *testing.T) {

		t.Run("Expect indexValid to return true if index is within range", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Add(6)
			new_list.Add(7)

			if new_list.IndexValid(3) != true {
				t.Fail()
			}
		
		})


		t.Run("Expect indexValid to return false if index is not within range", func(t *testing.T) {
			new_list := SinglyLinkedList{}
			new_list.Add(3)
			new_list.Add(4)
			new_list.Add(5)
			new_list.Add(6)
			new_list.Add(7)

			if new_list.IndexValid(-1) != false {
				t.Fail()
			}

			if new_list.IndexValid(40) != false {
				t.Fail()
			}
		
		})


	})
}
