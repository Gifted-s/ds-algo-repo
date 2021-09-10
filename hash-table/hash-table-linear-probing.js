const HashTableOpenAddressing = require("./hash-table-open-addressing");

class HashTableLinearProbing extends HashTableOpenAddressing {
    constructor() {
        super()
        // this will always store our delta value
        this.capacity = 5
    }
    // X*H2

    hash(key) {
        let total = 0
        const constant = 37
        //    The reason to choose 37 being, by some empirical research,
        //    if we take over 50,000 English words (formed as the union of the word lists provided in two variants of Unix), 
        //    using the constants 31, 33, 37, 39, and 41 will produce less than 7 collisions in each case, while creating a hashing function.
        for (let i = 0; i < key.length; i++) {
            total += constant * total + key.charCodeAt(i)
        }
        let hash_value = total % this.capacity
        return parseInt(hash_value)
    }

    probe(x) {
        return x 
    }
    // get next prime number and set it to the new capacity
    getNextCapacitySize() {
        this.capacity *= 2
        return this.capacity
    }
}

const hashtable = new HashTableLinearProbing ()
console.log(hashtable.capacity)

console.log(hashtable.insert("Sunkanmi", "osjkfddf"))
console.log(hashtable.insert("Ayodeji", "sdkmdnfkfv"))
console.log(hashtable.insert("Daniel", "xdcmvndfknvdf"))
console.log(hashtable.insert("Daniel", "we are geting there"))
console.log(hashtable.treshold)
console.log(hashtable.insert("Mabayomije", "erpoflkvfjd"))
console.log(hashtable.insert("Ogori Elemosho", "To test resize"))
console.log(hashtable.capacity)
console.log(hashtable.keyTable)
console.table(hashtable.keyTable)