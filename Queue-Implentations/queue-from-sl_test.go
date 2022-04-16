package queue_from_linked_list

import (
	"testing"
)

func TestQueue(t *testing.T) {

	t.Run("Contains Method", func(t *testing.T) {

		t.Run("Expect Contains method to return false if element is not present in the queue", func(t *testing.T) {
			queue := Queue{}
			found, err := queue.Contains(3)
			if found != false {
				t.Fail()
			}
			if err.Error() != "Queue is empty" {
				t.Fail()
			}

		})

		t.Run("Expect Contains method to return true if the element is present", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(3)
			found, err := queue.Contains(3)
			if found != true {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})
	})

	t.Run("Size Method", func(t *testing.T) {

		t.Run("Expect Size method to return size of queue", func(t *testing.T) {
			queue := Queue{}
			if queue.Size() != 0 {
				t.Fail()
			}
			queue.Enqueue(3)
			queue.Enqueue(4)
			if queue.Size() != 2 {
				t.Fail()
			}
		})
	})

	t.Run("Enqueue Method", func(t *testing.T) {

		t.Run("Expect Enqueue to return true if successful", func(t *testing.T) {
			queue := Queue{}
			if queue.Enqueue(3) != true {
				t.Fail()
			}
			if queue.Enqueue(4) != true {
				t.Fail()
			}
		})
		t.Run("Expect Size to increase by one after each addition", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(3)
			if queue.Size() != 1 {
				t.Fail()
			}
			queue.Enqueue(4)
			if queue.Size() != 2 {
				t.Fail()
			}
		})

		t.Run("Expect Queue to contain enqueued element", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(3)
			found, err := queue.Contains(3)
			if found != true {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})

	})

	t.Run("Dequeue Method", func(t *testing.T) {

		t.Run("Expect Dequeue to return dequeued element which must be element at the front of the queue ", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(2)
			queue.Enqueue(3)
			queue.Enqueue(4)
			removed, err := queue.Dequeue()
			if removed != 2 {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})
		t.Run("Expect Dequeue to return error if queue is empty", func(t *testing.T) {
			queue := Queue{}
			removed, err := queue.Dequeue()
			if removed != 0 {
				t.Fail()
			}
			if err.Error() != "Queue is Empty" {
				t.Fail()
			}

		})
		t.Run("Expect queue not to contain removed element", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(2)
			queue.Enqueue(3)
			queue.Enqueue(4)
			// First: delete element
			removed, err := queue.Dequeue()
			if removed != 2 {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
			// Second: test if queue contains removed element
			found, err := queue.Contains(2)
			if found != false {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}

		})
		t.Run("Expect Size to be reduced by one after Dequeuing an element", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(2)
			queue.Enqueue(3)
			queue.Enqueue(4)
			queue.Dequeue()
			if queue.Size() != 2 {
				t.Fail()
			}
		})

	})

	t.Run("Peek Method", func(t *testing.T) {
		t.Run("Expect Peek to return value at front of the queue ", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(2)
			queue.Enqueue(3)
			queue.Enqueue(4)
			val, err := queue.Peek()
			if val != 2 {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
		})

		t.Run("Expect Peek to return value at front of the queue without removing it", func(t *testing.T) {
			queue := Queue{}
			queue.Enqueue(2)
			queue.Enqueue(3)
			queue.Enqueue(4)
			val, err := queue.Peek()
			if val != 2 {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}
			found, err := queue.Contains(2)
			if found != true {
				t.Fail()
			}
			if err != nil {
				t.Fail()
			}

		})

		t.Run("Expect Peek to return false and error if queue is empty", func(t *testing.T) {
			queue := Queue{}
			found, err := queue.Peek()
			if found != 0 {
				t.Fail()
			}
			if err.Error() != "Queue is Empty" {
				t.Fail()
			}

		})

	})
}
