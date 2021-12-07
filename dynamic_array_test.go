package dynamic_array

import (
	"testing"
)

func TestDynamicArray(t *testing.T) {
	new_array := Array{}
	t.Run("Create array tests", func(t *testing.T) {

		t.Run("Expect creation of a new array to return true", func(t *testing.T) {
			if new_array.Create(5) != true {
				t.Fail()
			}

		})

		t.Run("Expect created array to have the specified capacity", func(t *testing.T) {
			if new_array.Capacity != 5 {
				t.Fail()
			}
		})

		t.Run("Expect created array to have a length of 0", func(t *testing.T) {
			if new_array.Length != 0 {
				t.Fail()
			}
		})

	})

	t.Run("IsOutOfBounds tests", func(t *testing.T) {
		t.Run("Expect IsOutOfBounds func to return true if index exheed length", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.IsOutOfBounds(4) != true {
				t.Fail()
			}
		})

		t.Run("Expect IsOutOfBounds func to return true if index is less than 0", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.IsOutOfBounds(-1) != true {
				t.Fail()
			}
		})
	})

	t.Run("Add to array tests", func(t *testing.T) {

		t.Run("Expect add function to return true if the operation was successful", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			if new_array.Add(10) != true {
				t.Fail()
			}
		})

		t.Run("Expect length to increase by one each time we add new element", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3)
			if new_array.Length != 1 {
				t.Fail()
			}
			new_array.Add(7)
			if new_array.Length != 2 {
				t.Fail()
			}
			new_array.Add(8)
			if new_array.Length != 3 {
				t.Fail()
			}
		})

		t.Run("Expect array to contain added element", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3)
			if new_array.Contains(3) != true {
				t.Fail()
			}
			new_array.Add(7)
			if new_array.Contains(7) != true {
				t.Fail()
			}
			new_array.Add(8)
			if new_array.Contains(8) != true {
				t.Fail()
			}
		})

		t.Run("Expect capacity to be doubled if treshold is exheeded", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Add(9) // index 3
			if new_array.Capacity != 6 {
				t.Fail()
			}
		})

	})

	t.Run("Remove from array tests", func(t *testing.T) {

		t.Run("Expect remove function to return element that was removed", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.RemoveAt(2) != 8 {
				t.Fail()
			}
		})

		t.Run("Expect length to decrease by one each time we remove an element", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3)  // index 0
			new_array.Add(7)  // index 1
			new_array.Add(8)  // index 2
			new_array.Add(9)  // index 3
			new_array.Add(10) // index 4
			new_array.RemoveAt(0)
			if new_array.Length != 4 {
				t.Fail()
			}
			new_array.RemoveAt(1)
			if new_array.Length != 3 {
				t.Fail()
			}
			new_array.RemoveAt(2)
			if new_array.Length != 2 {
				t.Fail()
			}
		})

		t.Run("Expect array not to contain the removed element after removal", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.RemoveAt(0)
			if new_array.Contains(3) != false {
				t.Fail()
			}
		})

		t.Run("Expect capacity to equal length after removal", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Add(9) // index 3
			new_array.RemoveAt(3)
			if new_array.Length != 3 {
				t.Fail()
			}
			if new_array.Capacity != 3 {
				t.Fail()
			}
		})

	})

	t.Run("Size tests", func(t *testing.T) {

		t.Run("Expect size method to return length of the dynamic array", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Size() != 3 {
				t.Fail()
			}
		})
	})

	t.Run("IsEmpty method tests", func(t *testing.T) {

		t.Run("Expect IsEmpty Method to return false if the array is not empty", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2

			if new_array.IsEmpty() != false {
				t.Fail()
			}
		})

		t.Run("Expect IsEmpty Method to return true if the array is empty", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			if new_array.IsEmpty() != true {
				t.Fail()
			}
		})
	})

	t.Run("Clear method tests", func(t *testing.T) {

		t.Run("Expect Clear method to return true", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Clear() != true {
				t.Fail()
			}
		})

		t.Run("Expect Length to be 0", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Clear()
			if new_array.Length != 0 {
				t.Fail()
			}
		})
	})

	t.Run("Get method tests", func(t *testing.T) {

		t.Run("Expect Get method to return element at index", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Get(2) != 8 {
				t.Fail()
			}
		})

	})

	t.Run("Set method tests", func(t *testing.T) {

		t.Run("Expect Set method to return true is set was successful", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Set(2, 10) != true {
				t.Fail()
			}
		})

		t.Run("Expect element at index to change to new element", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Set(2, 10)
			if new_array.Inner_Array[2] != 10 {
				t.Fail()
			}
		})

	})

	t.Run("IndexOf method tests", func(t *testing.T) {

		t.Run("Expect IndexOf method to return -1 if element was not found", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.IndexOf(4) != -1 {
				t.Fail()
			}
		})

		t.Run("Expect IndexOf method to return element index if element was  found", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.IndexOf(8) != 2 {
				t.Fail()
			}
		})

		t.Run("Expect IndexOf method to return first index of element encountered in case when there is a duplicate ", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Add(8) // index 3
			if new_array.IndexOf(8) != 2 {
				t.Fail()
			}
		})

	})

	t.Run("LastIndexof method tests", func(t *testing.T) {

		t.Run("Expect LastIndexof method to return -1 if element was not found", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.IndexOf(4) != -1 {
				t.Fail()
			}
		})

		t.Run("Expect LastIndexOf method to return last index of element encountered in case when there is a duplicate ", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			new_array.Add(8) // index 3
			if new_array.LastIndexOf(8) != 3 {
				t.Fail()
			}
		})

	})

	t.Run("Contains method tests", func(t *testing.T) {

		t.Run("Expect Contains method to return false if element was not found", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Contains(4) != false {
				t.Fail()
			}
		})

		t.Run("Expect Contains method to return true if element was not found", func(t *testing.T) {
			new_array := Array{}
			new_array.Create(3)
			new_array.Add(3) // index 0
			new_array.Add(7) // index 1
			new_array.Add(8) // index 2
			if new_array.Contains(3) != true {
				t.Fail()
			}
		})

	})

}
