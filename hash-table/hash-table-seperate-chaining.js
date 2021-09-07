// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn the Hash Table  Data Structure using the Seperate Chaining Method
const LinkedList = require("../linked-list")
// Entry class to create any new entry
class Entry {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.hash = null
    }
}

class HashTableWithSeperateChaining {
    constructor(capacity, loadFactor) {
        this.capacity = capacity || 10 // use default or specified capacity
        this.loadFactor = loadFactor || 0.75// use default or specified load factor
        this.size = 0; // size is initially at 0
        this.treshold = this.capacity * this.loadFactor // treshold is the multiplication of the capacity and load factor
        this.table = new Array(this.capacity) // table will be an array of capacity size
    }



    // This is the hash function, you can create your own customized one
    hash(key) {
        let total = 0
        const constant = 37
        //    The reason to choose 37 being, by some empirical research,
        //    if we take over 50,000 English words (formed as the union of the word lists provided in two variants of Unix), 
        //    using the constants 31, 33, 37, 39, and 41 will produce less than 7 collisions in each case, while creating a hasing function.
        for (let i = 0; i < key.length; i++) {
            total += constant * total + key.charCodeAt(i)
        }

        return parseInt(total)
    }


    // return the index where a particular hash is/can be stored
    generateIndex(hash) {
        return hash %= this.capacity;
    }

    // return the curent size if the table
    getSize() {
        return this.size
    }
    // return the capacity of entry the hash table can hold
    getCapacity() {
        return this.capacity
    }

    // return the treshold of the hashtable  
    getTreshold() {
        return this.treshold
    }

    // boolean- return true if hastable is empty otherwise return false
    isEmpty() {
        return this.size == 0;
    }

    // reset the hashtable
    clear() {
        this.table = new Array(this.capacity)
        this.size = 0;
        return true
    }


    // return all the keys available in the hash table
    getKeys() {
        let key_array = []
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head
                while (current) {
                    // push the key of individual entry stored in the linked list
                    key_array.push(current.data.key)
                    current = current.next

                }
            }
        }
        return key_array
    }

    // return all the values stored in the hash table
    getValues() {
        let value_array = []
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let current = this.table[i].head
                while (current) {
                    // push the value of individual entry stored in the linked list
                    value_array.push(current.data.value)
                    current = current.next

                }
            }
        }
        return value_array
    }

    // returns the value of the given key
    get(key) {
        let hash = this.hash(key)
        let ind = this.generateIndex(hash)
        let entry = this.getEntry(ind, key)
        // return null if no entry with that key
        if (!entry) {
            return null
        }

        // return entry value
        return entry.value
    }



    // boolean- return true if the entry was inserted, return the updated entry in case the entry already exist
    insert(k, v) {
        // create entry object
        const entry = new Entry(k, v)
        // hash key
        let hash = entry.hash = this.hash(k)
        // get index
        let ind = this.generateIndex(hash)

        let bucket = this.table[ind]

        // if bucket(linked list) does not exist at this index then create an empty one 
        if (!bucket) this.table[ind] = bucket = new LinkedList()

        // check if the entry already exist
        let existentEntry = this.getEntry(ind, k)
        if (!existentEntry) {
            // if it doen not exist then add it to the existing bucket
            bucket.unshift(entry)
            this.table[ind] = bucket
            // increment the table size and check if the size is greater than the capacity
            if (++this.size > this.treshold) {
                // if size is greater than the capacity then resize the table
                this.resizeTable()
                console.log("TRESHOLD EXHEEDED, CAPACITY INCREASED ", this.capacity)
            }
            return true
        }
        else {
            // if the entry already exist then update its value
            existentEntry.value = v

            // return the updated entry
            return existentEntry
        }
    }

    // returns true if the entry was deleted successfully, otherwise return false
    remove(key) {
        // get key hash
        let hash = this.hash(key)
        // get hash index 
        let ind = this.generateIndex(hash)
        let bucket = this.table[ind]
        // if no bucket was found return false
        if (!bucket) {
            return false
        }
        let current = bucket.head
        let index_to_delete = 0
        // traverse the list until the entry to delete if found
        while (current) {
            if (current.data.key == key) {
                // delete entry
                bucket.remove(index_to_delete)
                // reduce table size
                --this.size

                //return true
                return true
            }
            index_to_delete++
            current = current.next
        }

    }

    // resize table when size is greater than the treshold
    resizeTable() {
        // double the capacity: capacity can also be trippled but for efficient use of memory its better you double it.
        this.capacity *= 2

        // recompute treshold
        this.treshold = this.loadFactor * this.capacity

        // create a new table
        const newTable = new Array(this.capacity)
        for (let i = 0; i < this.table.length; i++) {
            // check if there exist a bucket at the current interation in the table
            if (this.table[i]) {
                let bucket = this.table[i]
                let current = bucket.head
                // traverse the bucket(linkedlist in this case)
                while (current) {
                    let entry = current.data
                    // recompute hash for entry
                    let hash = this.hash(entry.key)
                    entry.hash = hash
                    // recompute index to store the entry
                    let index = this.generateIndex(hash)
                    // check if bucket exist in the newTable table
                    let existing_bucket = newTable[index]
                    // if the bucket does not exist then create it
                    if (!existing_bucket) newTable[index] = existing_bucket = new LinkedList()
                    // instert into bucket
                    existing_bucket.unshift(entry)
                    current = current.next
                }
            }
            // set the index in the old table to null
            this.table[i] = null
        }
        // reset table to the new table created
        this.table = newTable
    }

    // check if a particular entry exist and returns it
    getEntry(ind, key) {
        let entry = null;
        let bucket = this.table[ind]
        let current = bucket.head
        // traverse the bucket until entry is found by comparing keys
        while (current) {
            if (current.data.key === key) {
                entry = current.data
                break
            }
            current = current.next
        }
        // return the entry
        return entry
    }
    // helper function to print current entries in the hashtable
    printInfo() {
        let final_result = []
        for (let i = 0; i < this.table.length; i++) {
            let string_format = `INDEX ${i} :`
            if (this.table[i]) {
                let current = this.table[i].head
                while (current) {
                    string_format += ` -> Node {Key: ${current.data.key},  Val: ${current.data.value}}`
                    current = current.next

                }
                final_result.push(string_format + `  [ SIZE: ${this.table[i].length} ] \n`)
            }
            else {
                string_format += " -> Null"
                final_result.push(string_format + `  [ SIZE: 0 ] \n`)
            }
        }

        for (let i of final_result) {
            console.log(i)
        }
    }

}

const hashTable = new HashTableWithSeperateChaining ()
hashTable.insert("Sunkanmi", "New York, USA IP:192.163.84.90")
hashTable.insert("Kayode", "Denver, Colorado  IP:171.163.84.90")
hashTable.insert("Tomoye", " Rocky Mountain, USA  IP:121.163.84.90")
hashTable.insert("Bolatito", "France, Cameroon  IP:171.163.84.90")
hashTable.insert("KunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("RunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("GunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("MunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("MunleAfford", "Lagos, USA  IP:0.0.0.0")
hashTable.insert("Sunkanmi", "New York, USA IP:192.163.84.90")
hashTable.insert("Kayode", "Denver, Colorado  IP:171.163.84.90")
hashTable.insert("Tomoye", " Rocky Mountain, USA  IP:121.163.84.90")
hashTable.insert("Bolatito", "France, Cameroon  IP:171.163.84.90")
hashTable.insert("KunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("RunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("GunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("MunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("MunleAfford", "Lagos, USA  IP:0.0.0.0")
hashTable.insert("Sunkanmi", "New York, USA IP:192.163.84.90")
hashTable.insert("Kayode", "Denver, Colorado  IP:171.163.84.90")
hashTable.insert("Tomoye", " Rocky Mountain, USA  IP:121.163.84.90")
hashTable.insert("Bolatito", "France, Cameroon  IP:171.163.84.90")
hashTable.insert("KunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("RunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("GunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("MunleAfford", "Lagos, Nigeria  IP:0.0.0.0")
hashTable.insert("JunleAfford", "Lagos, USA  IP:0.0.0.0")
hashTable.insert("Punkanmi", "New York, USA IP:192.163.84.90")
hashTable.insert("Kayode", "Denver, Colorado  IP:171.163.84.90")
// console.log(hashTable.get("MunleAfford"))
// console.log(hashTable.remove("MunleAfford"))
// console.log(hashTable.get("MunleAfford"))
hashTable.printInfo()
// console.log(hashTable.size)
// hashTable.printInfo()
// console.log("TOTAL SIZE: ", hashTable.getSize())
// console.log("TRESHOLD: ", hashTable.getTreshold())
// console.log("CAPACITY: ", hashTable.getCapacity())

// console.log(hashTable.getValues())

//INDEX 0 : -> Node {Key: RunleAfford,  Val: Lagos, Nigeria  IP:0.0.0.0} -> Node {Key: MunleAfford,  Val: Lagos, Nigeria  IP:0.0.0.0}  [ SIZE: 2 ] 

// INDEX 1 : -> Null  [ SIZE: 0 ] 

// INDEX 2 : -> Null  [ SIZE: 0 ] 

// INDEX 3 : -> Node {Key: Bolatito,  Val: France, Cameroon  IP:171.163.84.90}  [ SIZE: 1 ] 

// INDEX 4 : -> Null  [ SIZE: 0 ] 

// INDEX 5 : -> Null  [ SIZE: 0 ] 

// INDEX 6 : -> Null  [ SIZE: 0 ] 

// INDEX 7 : -> Node {Key: Sunkanmi,  Val: New York, USA IP:192.163.84.90}  [ SIZE: 1 ] 

// INDEX 8 : -> Node {Key: JunleAfford,  Val: Lagos, USA  IP:0.0.0.0}  [ SIZE: 1 ] 

// INDEX 9 : -> Node {Key: Kayode,  Val: Denver, Colorado  IP:171.163.84.90}  [ SIZE: 1 ] 

// INDEX 10 : -> Null  [ SIZE: 0 ] 

// INDEX 11 : -> Node {Key: Punkanmi,  Val: New York, USA IP:192.163.84.90}  [ SIZE: 1 ] 

// INDEX 12 : -> Node {Key: KunleAfford,  Val: Lagos, Nigeria  IP:0.0.0.0}  [ SIZE: 1 ] 

// INDEX 13 : -> Null  [ SIZE: 0 ] 

// INDEX 14 : -> Null  [ SIZE: 0 ] 

// INDEX 15 : -> Null  [ SIZE: 0 ] 

// INDEX 16 : -> Node {Key: GunleAfford,  Val: Lagos, Nigeria  IP:0.0.0.0}  [ SIZE: 1 ] 

// INDEX 17 : -> Null  [ SIZE: 0 ] 

// INDEX 18 : -> Null  [ SIZE: 0 ] 

// INDEX 19 : -> Node {Key: Tomoye,  Val:  Rocky Mountain, USA  IP:121.163.84.90}  [ SIZE: 1 ] 


// TOTAL SIZE:  10
// TRESHOLD:  15
// CAPACITY:  20