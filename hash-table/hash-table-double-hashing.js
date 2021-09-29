k// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn the Hash Table  Data Structure using the  Double Hashing Method

const HashTableOpenAddressing = require("./hash-table-open-addressing");

class HashTableWithDoubleHashing extends HashTableOpenAddressing {
    constructor() {
        super()
        // this will always store our delta value
        this.runtime_hash_value = null
        this.capacity = 5
    }

    //secondary hash function
    hash(key) {
        key = key.split("").reverse().join()
        let total = 0
        const constant = 37
        //    The reason to choose 37 being, by some empirical research,
        //    if we take over 50,000 English words (formed as the union of the word lists provided in two variants of Unix), 
        //    using the constants 31, 33, 37, 39, and 41 will produce less than 7 collisions in each case, while creating a hashing function.
        for (let i = 0; i < key.length; i++) {
            total += constant * total + key.charCodeAt(i)
        }
        let hash_value = total % this.capacity
        // check if hash_value is 0 and set it back to 1 to avoid infinite loop while looking for free space
        if (hash_value === 0) {
            hash_value = 1
        }
        this.runtime_hash_value = hash_value
        return parseInt(hash_value)
    }

    probe(x) {
        return x * this.runtime_hash_value
    }
    // get next prime number and set it to the new capacity
    getNextCapacitySize() {
        this.capacity *= 2
        let adder = 1
        while (adder >= 1) {
            let current_sum = this.capacity + adder
            if (current_sum % 2 !== 0 && current_sum % 3 !== 0 && current_sum % 5 !== 0) {
                return current_sum
            }
            adder++
        }
    }

}

const hashtable = new HashTableWithDoubleHashing()
console.log(hashtable.capacity)
console.log(hashtable.insert("Sunkanmi", "osjkfddf"))
console.log(hashtable.insert("Ayodeji", "sdkmdnfkfv"))
console.log(hashtable.insert("Daniel", "xdcmvndfknvdf"))
console.log(hashtable.insert("Daniel", "we are geting there"))

console.log(hashtable.insert("Mabayomije", "erpoflkvfjd"))
console.log(hashtable.insert("Ogori Elemosho", "To test resize"))
console.log(hashtable.capacity)
console.log(hashtable.keyTable)
console.table(hashtable.keyTable)