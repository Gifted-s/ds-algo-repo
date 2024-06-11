
// Adewumi Sunkanmi Data structures Repository 
// Available for anyone who wants to learn the Hash Table  Data Structure using the Quadratic Probing Method

const HashTableOpenAddressing = require("./hash-table-open-addressing")



// class HashTableLinearProbing to create the hashtable instance
class HashTableQadraticProbing extends HashTableOpenAddressing {

 
    // the hash function
    hash(key) {
        let total = 0
        const constant = 37
        //    The reason to choose 37 being, by some empirical research,
        //    if we take over 50,000 English words (formed as the union of the word lists provided in two variants of Unix), 
        //    using the constants 31, 33, 37, 39, and 41 will produce less than 7 collisions in each case, while creating a hashing function.
        for (let i = 0; i < key.length; i++) {
            total += constant * total + key.charCodeAt(i)
        }
        return parseInt(total % this.capacity)
    }

    //  the probing function, currently using the quadratic function (x^2 + x)/2
    probe(x) {
        return ((x * x) + x) / 2
    }

    // return the next size of the table while resizing
    getNextCapacitySize() {
        return this.capacity * 2
    }

}


const hashtable = new  HashTableQadraticProbing ()
console.log(hashtable.capacity)
console.log(hashtable.insert("Sunkanmi", "osjkfddf"))
console.log(hashtable.insert("Ayodeji", "sdkmdnfkfv"))
console.log(hashtable.insert("Daniel", "xdcmvndfknvdf"))
console.log(hashtable.insert("Daniel", "we are geting there"))
console.log(hashtable.keyTable)
console.log(hashtable.insert("Mabayomije", "erpoflkvfjd"))
console.log(hashtable.insert("Ogori Elemosho", "To test resize"))
console.log(hashtable.capacity)



// ┌─────────┬──────────────────┐
// │ (index) │      Values      │
// ├─────────┼──────────────────┤
// │    0    │ 'Ogori Elemosho' │
// │    7    │    'Sunkanmi'    │
// │    9    │    'Ayodeji'     │
// │   12    │   'Mabayomije'   │
// │   14    │     'Daniel'     │
// └─────────┴──────────────────┘
// ┌─────────┬───────────────────────┐
// │ (index) │        Values         │
// ├─────────┼───────────────────────┤
// │    0    │   'To test resize'    │
// │    7    │      'osjkfddf'       │
// │    9    │     'sdkmdnfkfv'      │
// │   12    │     'erpoflkvfjd'     │
// │   14    │ 'we are geting there' │
// └─────────┴───────────────────────┘
//  console.table(hashtable.keyTable)
//  console.table(hashtable.valueTable)
//console.log(hashtable.remove("Daniel"))
//  console.log(hashtable.noOfModification)
// console.table(hashtable.keyTable)
// console.table(hashtable.valueTable)


console.log(hashtable.getKeys())
console.log(hashtable.getValues())
console.log(hashtable.getLoadFactor())
console.log(hashtable.getSize())
console.log(hashtable.getTreshold())
console.log(hashtable.hasKey("Sunkanmi"))

// console.table(hashtable.valueTable)

module.exports =HashTableQadraticProbing