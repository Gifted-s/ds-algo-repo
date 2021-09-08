
// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn the Hash Table  Data Structure using the Linear Probing Method



// class HashTableLinearProbing to create the hashtable instance
class HashTableQuadraticProbing {
    constructor(capacity, max_load_factor) {
        this.default_capacity = 8// default has table capacity
        this.capacity = capacity || this.default_capacity
        this.max_load_factor = max_load_factor || 0.5  // maximum load factor
        this.treshold = this.capacity * this.max_load_factor // the treshold to be reached before resize occur = capacity * load factor
        this.noOfModification = 0 // stores the number of modification done to the hash table
        this.noOfKeys = 0 // stores the number of keys in the has table
        this.keyTable = new Array(this.capacity)  // stores the keys in the table (size of capacity)
        this.valueTable = new Array(this.capacity) // stores the values in the table (size of capacity)
        this.noOfBucketsUsed = 0  // stores the number of buckets used in the hashtable
        this.THUMBSTONE = 1001// in our case 1001 will represent a thumbstone
        // ((x*x)+x)/2 

    }

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
    // get next index to check
    normalizeIndex(keyindex) {
        // keyindex will be something like H(k) + P(x) // If you don't understand this kindly checkout my youtube channel
        return (keyindex % this.capacity)
    }


    // instert a new key value pair into the hash table
    insert(k, v) {
        if (!k) {
            throw new Error("Key is required")
        }

        // check if the treshold size has been exheeded then resize if so
        if (this.noOfBucketsUsed >= this.treshold) {
            this.resizeTable()
        }
        // variable i initially set to the hash of key
        let i = this.hash(k)

        // j will be -1 if no thumbstone was found otherwise set to the index of the first thumbstone found.
        let j = -1

        // x will be used by the probing function p(x)
        let x = 1

        // loop through the table
        do {

            // if value stored at this index is a THUMBSTONE then set the j varible to the index
            if (this.keyTable[i] == this.THUMBSTONE) {
                if (j === -1) {
                    j = i
                }
            }
            // if there is an entry already at the index
            else if (this.keyTable[i]) {
                // check if the key of the entry is equal to the key to insert
                if (this.keyTable[i] === k) {

                    // get the stored value
                    let found_value = this.valueTable[i]

                    // if j has been set to the index of a thumbstone
                    if (j !== -1) {
                        // update the thumbstone index with the key 
                        this.keyTable[j] = k
                        // update the value at the thumbstone index with the new value passed
                        this.valueTable[j] = v
                        // set data stored at previous value index to null
                        this.valueTable[i] = null
                        // set data stored at previous key index to THUMBSTONE
                        this.keyTable[i] = this.THUMBSTONE
                    }
                    // if j is still equals to -1
                    // update value to stored at index i in  value table to the new value
                    this.valueTable[i] = v
                    // increment modification by 1
                    ++this.noOfModification
                    // return previous value stored
                    return found_value
                }

            }
            // is the key at current indes is null
            else {
                // check if j is not equal to -1
                if (j !== -1) {
                    // set index of j in the key table to the key passed
                    this.keyTable[j] = k
                    // set index of j in the value table to the value passed
                    this.valueTable[j] = v
                    ++this.noOfModification
                }
                // if j is equal to -1 i.e no thumbstone has been found
                else {
                    // set key stored at i to the passed key in key table
                    this.keyTable[i] = k
                    // set value stored at i to the passed value in the value table
                    this.valueTable[i] = v
                    // increment modification count
                    ++this.noOfModification
                    // increment no of bucket used
                    ++this.noOfBucketsUsed
                    // increment no of keys 
                    ++this.noOfKeys

                }
                return true
            }
            // if none this condition holds then reset the index by nominalization function
            i = this.normalizeIndex(this.hash(k) + this.probe(x++))
        } while (true);
    }

    hasKey(k) {
        if (!k) {
            throw new Error("Key is required")
        }
        // variable i initially set to the hash of key
        let i = this.hash(k);
        // j will be -1 if no thumbstone was found otherwise set to the index of the first thumbstone found.
        let j = -1
        // x will be used by the probing function p(x)
        let x = 1;
        // loop through the table
        do {
            // if value stored at this index is a THUMBSTONE then set the j varible to the index
            if (this.keyTable[i] === this.THUMBSTONE) {
                if (j === -1) {
                    j = i
                }
            }
            // if there is an entry already at the index
            else if (this.keyTable[i]) {
                // check if the key of the entry is equal to the key to insert
                if (this.keyTable[i] === k) {
                    // get the stored value
                    let found_value = this.valueTable[i]
                    // if j has been set to the index of a thumbstone
                    if (j !== -1) {
                        // update the thumbstone index with the key 
                        this.keyTable[j] = k
                        // update the value at the thumbstone index with the new value passed
                        this.valueTable[j] = found_value
                        // set data stored at previous key index to THUMBSTONE
                        this.keyTable[i] = this.THUMBSTONE
                        // set data stored at previous value index to null
                        this.valueTable[i] = null
                        return true
                    }
                    return true
                }
            }
            else {
                /// of the none of this condition was met then return false
                return false
            }
            // if none this condition holds then reset the index by nominalization function
            i = this.normalizeIndex(this.hash(k) + this.probe(x++))
        } while (true);
    }


    get(k) {
        if (!k) {
            throw new Error("Key is required")
        }
        // variable i initially set to the hash of key
        let i = this.hash(k);
        // j will be -1 if no thumbstone was found otherwise set to the index of the first thumbstone found.
        let j = -1
        // x will be used by the probing function p(x)
        let x = 1;
        // loop through the table
        do {
            // if value stored at this index is a THUMBSTONE then set the j varible to the index
            if (this.keyTable[i] === this.THUMBSTONE) {
                if (j === -1) {
                    j = i
                }
            }
            // if there is an entry already at the index
            else if (this.keyTable[i]) {
                // check if the key of the entry is equal to the key to insert
                if (this.keyTable[i] === k) {
                    // get the stored value
                    let found_value = this.valueTable[i]
                    // if j has been set to the index of a thumbstone
                    if (j !== -1) {
                        // update the thumbstone index with the key 
                        this.keyTable[j] = k
                        // update the value at the thumbstone index with the new value passed
                        this.valueTable[j] = found_value
                        // set data stored at previous key index to THUMBSTONE
                        this.keyTable[i] = this.THUMBSTONE
                        // set data stored at previous value index to null
                        this.valueTable[i] = null
                        // return the value that was found
                        return found_value
                    }
                    // if j is  -1 then return value
                    return found_value
                }
            }
            else {
                // if none of this condition was met then return null
                return null
            }
            i = this.normalizeIndex(this.hash(k) + this.probe(x++))
        } while (true);
    }

    // remove a particular key from the hash table
    remove(k) {
        if (!k) {
            throw new Error("Key is required")
        }
        // offset is the key hash
        let offset = this.hash(k)
        // create a loop that increments based on x
        for (let i = offset, x = 1; ; i = this.normalizeIndex(offset + this.probe(x++))) {
            // if a Thumbstone was found at the index  then skip it
            if (this.keyTable[i] === this.THUMBSTONE) continue
            // if a null value was found at the index then return null
            if (this.keyTable[i] === null) {
                return null
            }
            // if  a key  was found at the index then check if the key is equal to the key passed
            if (this.keyTable[i] === k) {
                // replace key at index i with a thumbstone
                this.keyTable[i] = this.THUMBSTONE
                // get the value to be deleted
                let deleted_value = this.valueTable[i]
                // set the value at index i to null
                this.valueTable[i] = null
                // decrememnt the number of keys by 1
                --this.noOfKeys
                // increment the number of modification by 1
                ++this.noOfModification
                // return the deleted value
                return deleted_value
            }
        }
    }
    // return the next size of the table while resizing
    getNextCapacitySize() {
        return this.capacity * 2
    }
    // resize table
    resizeTable() {
        // reset capacity to next capacity size
        this.capacity = this.getNextCapacitySize()
        // recompute treshold
        this.treshold = this.max_load_factor * this.capacity
        // create an empty keys table of size capacity
        let oldKeyTable = new Array(this.capacity)
        // create an empty values table of size capacity
        let oldValueTable = new Array(this.capacity)

        // extract current key table
        let oldKeyTemp = this.keyTable
        // reest key table
        this.keyTable = oldKeyTable
        // set oldkey variable to point to the current key table oldKeyTemp
        oldKeyTable = oldKeyTemp

        // extract current value table
        let oldValueTableTemp = this.valueTable
        // reest values table
        this.valueTable = oldValueTable
        // set oldValue variable to point to the current values table oldValueTableTemp
        oldValueTable = oldValueTableTemp
        // reset the number of keys to 0
        this.noOfKeys = 0
        // reset no of buckets to 0
        this.noOfBucketsUsed = 0;
        // loop through all the keys in the oldKeys table
        for (let i = 0; i <= oldKeyTable.length; i++) {
            // if the current key is null or is a THUMBSTONE then skip that index
            if (!oldKeyTable[i] || oldKeyTable[i] === this.THUMBSTONE) continue
            // re insert all the keys and values using the insert method
            this.insert(oldKeyTable[i], oldValueTable[i])
            // free that space
            oldKeyTable[i] = null
            // free that space
            oldValueTable[i] = null
        }
    }

    // returns all the keys in the table
    getKeys() {
        let keys = []
        // loop through all the keys and insert them into the keys variable
        for (let i = 0; i < this.keyTable.length; i++) {
            // if the key is null or equal to a THUMBSTONE then skip it
            if (!this.keyTable[i] || this.keyTable[i] === this.THUMBSTONE) continue
            keys.push(this.keyTable[i])
        }
        // retun all the keys
        return keys
    }
    // returns all the values in the table
    getValues() {
        let values = []
        // loop through all the values and insert them into the keys variable
        for (let i = 0; i < this.valueTable.length; i++) {
            values.push(this.valueTable[i])
        }
        // return values
        return values
    }
    // returns current table size
    getSize() {
        return this.capacity
    }
    // return the current treshold of the table
    getTreshold() {
        return this.treshold
    }
    // return the maximum load factor of the table
    getLoadFactor() {
        return this.max_load_factor
    }
    // this will reset the table by looping through all the keys and values and reset them to null
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.keyTable[i] = null
            this.valueTable[i] = null
        }
        // reset the no of buckets used
        this.noOfBucketsUsed = 0
        // reset number of keys to 0
        this.noOfKeys = 0
        // return no of modification made to 0
        this.noOfModification = 0
    }
    // boolean - if the table is empty return true otherwise return false 
    iseEmpty() {
        return this.noOfBucketsUsed ? true : false
    }
    // print all the keys and values in the array
    printInfo() {
        for (let i = 0; i < this.keyTable.length; i++) {
            if (!this.keyTable[i] || this.keyTable[i] === this.THUMBSTONE) continue
            console.log(this.keyTable[i], " => ", this.valueTable[i])
        }
    }
}


const hashtable = new  HashTableQuadraticProbing()
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
console.table(hashtable.keyTable)
console.table(hashtable.valueTable)


console.log(hashtable.getKeys())
console.log(hashtable.getValues())
console.log(hashtable.getLoadFactor())
console.log(hashtable.getSize())
console.log(hashtable.getTreshold())
console.log(hashtable.hasKey("Sunkanmi"))

// console.table(hashtable.valueTable)

