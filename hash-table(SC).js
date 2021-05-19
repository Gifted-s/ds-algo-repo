//Implemetation of  Hash table with seperate chaining
// Author Adewumi Sunkanmi

const LinkedList = require("./linked-list");

class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.hash = hash(this.key)
    }
}

function hash(key) {
    key = (key.length * 34) % 9
    return key
}

class HashTableWithSeprerateChaining {
    constructor() {
        this.size = 10;
        this.store = new Array(60)
    }


    insert(key, value) {
        const entry = new Entry(key, value)
        const index = entry.hash
        if (this.store[index] !== undefined) {
            let linkedList = this.store[index]
            linkedList.push(entry)
            return this.store
        }
        this.store[index] = new LinkedList()
        this.store[index].unshift(entry)
        return this.store;
    }
    viewMaps() {
        for (let i in this.store) {
            console.log(i, " => ", this.store[i])
        }
    }
    lookUp(key) {
        let index = hash(key)
        let linkedList = this.store[index]
        let current = linkedList.get(0)
        if (!current.next) {
            if(current.data.key===key){
                return "Name: " + current.data.key + " =>  Age: " + current.data.value
            }
        }
        while (current.next !== null){
            current = current.next
            if (current.data.key === key) {
                return "Name: " + current.data.key + " =>  Age: " + current.data.value
            }
        }
        return null
    }
    remove(key){
        let index = hash(key)
        let linkedList = this.store[index]
        if (linkedList.length===1) {
            this.store[index]=null
        }
        let counter=0
        let current= linkedList.get(0)
        while (current.next !== null){
            if (current.data.key === key) {
                linkedList.remove(counter)
                return
             }
            current = current.next
            counter++
           
        }
       
    }
}


const hashTable = new HashTableWithSeprerateChaining()

hashTable.insert("Robert", 24)
hashTable.insert("Kobamss", 54)
hashTable.insert("laravel", 32)
hashTable.insert("windows", 10)
hashTable.insert("apple", 18)
hashTable.insert("Macintosh", 18)
hashTable.remove('Kobamss')
 // console.log(hashTable.viewMaps())
 console.log(hashTable.lookUp('Kobamss'))