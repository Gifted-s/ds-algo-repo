package stack_from_linked_list

import (
	"testing"
)

func TestStack(t *testing.T) {

	t.Run("Search Method", func(t *testing.T) {

		t.Run("Expect Search methods to return false if the element is not present", func(t *testing.T) {
			stack := Stack{}
			found, err := stack.Search(3)
			if found != false {
				t.Fail()
			}
			if err.Error() != "Stack is empty" {
				t.Fail()
			}

		})

		t.Run("Expect Search methods to return true if the element is  present", func(t *testing.T) {
			stack := Stack{}
			stack.Push(3)
			found, err := stack.Search(3)
			if found != true {
				t.Fail()
			}
			if err !=nil {
				t.Fail()
			}
		})
	})

	t.Run("Size Method", func(t *testing.T) {

		t.Run("Expect Size method to return size of Stack", func(t *testing.T) {
			stack := Stack{}
			if stack.Size() != 0 {
				t.Fail()
			}
			stack.Push(3)
			stack.Push(4)
			if stack.Size() != 2 {
				t.Fail()
			}
		})
	})

	t.Run("Push Method", func(t *testing.T) {

		t.Run("Expect Push to return true after success", func(t *testing.T) {
			stack := Stack{}
			if stack.Push(3) != true {
				t.Fail()
			}
			if stack.Push(4) != true {
				t.Fail()
			}
		})
		t.Run("Expect Size to increase by one after each addition", func(t *testing.T) {
			stack := Stack{}
			stack.Push(3)
			if stack.Size() != 1 {
				t.Fail()
			}
			stack.Push(4)
			if stack.Size() != 2 {
				t.Fail()
			}
		})

		t.Run("Expect Stack to Contain added element", func(t *testing.T) {
			stack := Stack{}
			stack.Push(3)
			found, err := stack.Search(3)
			if found != true {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})

	})

	t.Run("Pop Method", func(t *testing.T) {

		t.Run("Expect Pop to return true is successful", func(t *testing.T) {
			stack := Stack{}
			stack.Push(2)
			stack.Push(3)
			stack.Push(4)
			removed, err := stack.Pop()
			if removed == false {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})
		t.Run("Expect Pop to return false and error if stack is empty", func(t *testing.T) {
			stack := Stack{}
			removed, err := stack.Pop()
			if removed != false {
				t.Fail()
			}
			if err.Error() != "Stack is empty" {
				t.Fail()
			}

		})

		t.Run("Expect Stack not to contain removed element", func(t *testing.T) {
			stack := Stack{}
			stack.Push(2)
			stack.Push(3)
			stack.Push(4)
			removed, err := stack.Pop()
			if removed !=true {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}

			found, err := stack.Search(4)
			stack.PrintStack()
			if found != false {
				t.Fail()
			}
			if err!= nil {
				t.Fail()
			}

		})

		t.Run("Expect Size to be reduced by one after removal", func(t *testing.T) {
			stack := Stack{}
			stack.Push(2)
			stack.Push(3)
			stack.Push(4)
			stack.Pop()
			if stack.Size() != 2 {
				t.Fail()
			}
		})

	})

	t.Run("Peek Method", func(t *testing.T) {

		t.Run("Expect Peek to return value at head", func(t *testing.T) {
			stack := Stack{}
			stack.Push(2)
			stack.Push(3)
			stack.Push(4)
			initial_head, err := stack.Peek()
			if initial_head != 4 {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}

		})

		t.Run("Expect Peek to return false and error if stack is empty", func(t *testing.T) {
			stack := Stack{}
			found, err := stack.Peek()
			if found != 0 {
				t.Fail()
			}
			if err.Error() != "Stack is empty" {
				t.Fail()
			}

		})

	})
}
