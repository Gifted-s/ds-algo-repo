package dynamic_array

import (
	"log"
	// "reflect"
)

type Array struct {
	Length      int
	Capacity    int
	Inner_Array []int
}

func (a *Array) Create(capacity int) bool {
	a.Capacity = capacity
	a.Length = 0
	a.Inner_Array = make([]int, capacity)
	return true
}

func (a *Array) Size() int {
	return a.Length
}

func (a *Array) IsEmpty() bool {
	return a.Length == 0
}

func (a *Array) IsOutOfBounds(index int) bool {
	if index < 0 || index > a.Capacity {
		return true
	}
	return false
}

func (a *Array) Get(index int) int {
	if a.IsOutOfBounds(index) {
		log.Fatal("index is out of bounds")
	}
	return a.Inner_Array[index]
}

func (a *Array) Set(index int, element int) bool {
	if a.IsOutOfBounds(index) {
		log.Fatal("index is out of bounds")
	}
	a.Inner_Array[index] = element
	return true
}

func (a *Array) Clear() bool {
	a.Inner_Array = a.Inner_Array[:0]
	a.Length = 0
	return true
}

func (a *Array) Add(element int) bool {
	if a.Length+1 > a.Capacity {
		if a.Capacity == 0 {
			a.Capacity = 1
		} else {
			a.Capacity *= 2
			new_array := make([]int, a.Capacity)
			for i := 0; i < a.Length; i++ {
				new_array[i] = a.Inner_Array[i]
			}
			a.Inner_Array = new_array
		}

	}
	a.Inner_Array[a.Length] = element
	a.Length = a.Length + 1
	return true
}

func (a *Array) RemoveAt(index int) int {
	if a.IsOutOfBounds(index) {
		log.Fatal("index is out of bounds")
	}
	data_to_remove := a.Inner_Array[index]
	new_array := make([]int, a.Length-1)
	for i, j := 0, 0; i < a.Length; i, j = i+1, j+1 {
		if i == index {
			j--
		} else {
			new_array[j] = a.Inner_Array[i]
		}
	}
	a.Inner_Array = new_array
	a.Length = a.Length - 1
	a.Capacity = a.Length
	return data_to_remove
}

func (a *Array) IndexOf(element int) int {
	for i := 0; i < a.Length; i++ {
		if a.Inner_Array[i] == element {
			return i
		}
	}

	return -1
}

func (a *Array) LastIndexOf(element int) int {
	elementIndex := -1
	for i := 0; i < a.Length; i++ {
		if a.Inner_Array[i] == element {
			elementIndex = i
		}
	}
	return elementIndex
}

func (a *Array) Contains(element int) bool {
	return a.IndexOf(element) != -1
}
