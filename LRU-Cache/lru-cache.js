// Copyright Adewumi Sunkanmi 2022

// 146. LRU Cache
// Medium
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
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
// At most 2 * 105 calls will be made to get and put

/**
 * @param {number} capacity
 */
function Node(key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
}
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.left = this.right = new Node(0, 0);
    this.left.next = this.right, this.right.prev = this.left
};

/** 
* @param {number} key
* @return {number}
*/
// remove from list
function remove(node) {
    let prev = node.prev, next = node.next;
    prev.next = next, next.prev = prev;
}
// insert to right;
function insert(lru, node) {
    let prev = lru.right.prev, next = lru.right
    prev.next = node, next.prev = node;
    node.prev = prev, node.next = next;
}

LRUCache.prototype.get = function (key) {
    if (this.cache[key]) {
        remove(this.cache[key])
        insert(this, this.cache[key])
        return this.cache[key].val
    }
    return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
    if (this.cache[key]) {
        remove(this.cache[key])
    }
    let newNode = new Node(key, value)
    insert(this, newNode)
    this.cache[key] = newNode

    if (Object.keys(this.cache).length > this.capacity) {
        // remove least recently used
        let lru = this.left.next;
        remove(lru);
        // delete LRU from hashmap
        delete this.cache[lru.key]
    }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/