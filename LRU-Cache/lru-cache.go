package lrucache

// Copyright Adewumi Sunkanmi 2022
// 146. LRU Cache
// Medium

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from lruCache operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

type Node struct {
	key  int
	val  int
	next *Node
	prev *Node
}
type LRUCache struct {
	capacity int
	cacheMap map[int]*Node
	left     *Node
	right    *Node
}

func Constructor(capacity int) LRUCache {
	cacheMap := map[int]*Node{}
	left := Node{0, 0, nil, nil}
	right := Node{0, 0, nil, nil}
	left.next = &right
	right.prev = &left
	lruCache := LRUCache{capacity, cacheMap, &left, &right}
	return lruCache
}

func remove(node *Node) {
	prev := node.prev
	next := node.next
	prev.next = next
	next.prev = prev
}

func insert(lru *LRUCache, node *Node) {
	prev := lru.right.prev
	next := lru.right
	prev.next = node
	next.prev = node
	node.prev = prev
	node.next = next
}

func (lruCache *LRUCache) Get(key int) int {
	if node, ok := lruCache.cacheMap[key]; ok {
		remove(node)
		insert(lruCache, node)
		return node.val
	}
	return -1
}

func (lruCache *LRUCache) Put(key int, value int) {
	if node, ok := lruCache.cacheMap[key]; ok {
		remove(node)
	}
	newNode := &Node{key, value, nil, nil}
	insert(lruCache, newNode)
	lruCache.cacheMap[key] = newNode

	if len(lruCache.cacheMap) > lruCache.capacity {
		// remove least recently used
		lru := lruCache.left.next
		remove(lru)
		// delete LRU from hashmap
		delete(lruCache.cacheMap, lru.key)
	}

}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
