package main

import "fmt"


// MaxHeap struct that has a slice to store the elements in the heap
type MaxHeap struct {
	slice []int 
}


// Insert - adds a new element to the heap 
func (h *MaxHeap) Insert(val int){
	h.slice = append(h.slice, val)
	h.heapifyUp(len(h.slice)-1)
}

// Extract - returns the largest element and removes it from the heap
func (h *MaxHeap) Extract()int{
  if len(h.slice)==0{
	fmt.Println("Heap is empty")
	return -1
  }
  extract := h.slice[0]
  l:= len(h.slice)-1
  h.slice[0] = h.slice[l]
  h.slice = h.slice[:l]
  h.heapifyDown(0)
  return extract
}
// Size - returns the size of the heap
func (h *MaxHeap) Size()int{
 return len(h.slice)
}






func (h *MaxHeap) heapifyUp(i int){
	for h.slice[parent(i)] < h.slice[i]{
		h.swap(parent(i), i)
		i= parent(i)
	}
}

func (h *MaxHeap) heapifyDown(i int){
lastIndex := len(h.slice)-1
l, r := left(i), right(i)
childToCompare :=0
for l<= lastIndex{

	if l == lastIndex{ // only left child
     childToCompare=l
	}else if h.slice[l] > h.slice[r] { // if left child is greater than right child
     childToCompare=l
	}else{ // if the child is greater than the left child
     childToCompare=r
	}

	if h.slice[i] < h.slice[childToCompare]{
		h.swap(i, childToCompare)
		i = childToCompare
        l,r = left(i), right(i)
	}else{
		return
	}
}
}


func parent(i int)int{
	return (i-1)/2
}

func left(i int)int{
	return (2*i)+1
}

func right(i int)int{
	return (2*i)+2
}

func (h *MaxHeap) swap(i1,i2 int){
 h.slice[i1], h.slice[i2] = h.slice[i2], h.slice[i1]
}

func main(){
	buildHeap := []int{4,12,42,9,45,2,1,95,3}
	maxHeap:= &MaxHeap{}
	for i:=0;i< len(buildHeap);i++{
		maxHeap.Insert(buildHeap[i])
	}
	fmt.Println(maxHeap.Size())

	// for i:=0;i< len(buildHeap);i++{
	// 	fmt.Println(maxHeap)
	// 	maxHeap.Extract()
	// }
}