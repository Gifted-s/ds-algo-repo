class ArrayDS {
    constructor(capacity) {
        this.capacity = capacity; // the actual capacity of the array
        this.array = new Array(capacity)
        this.length = 0;// the length user thinks array is
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    checkBound(index) {
        if (index < 0 || index > this.length-1) throw new RangeError("index is out of bound")
    }
    get(index) {
        this.checkBound(index)
        return this.array[index];
    }
    set(index, element) {
        this.checkBound(index);
        this.array[index] = element;
        return true
    }
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.array[i] = null;
        }
        this.length = 0;
    }
    add(element) {
        if (this.length + 1 > this.capacity) {

            if (this.capacity === 0) {
                this.capacity = 1
            } else {
                this.capacity *= 2
                let new_array = new Array(this.capacity)
                for (let i = 0; i < this.length; i++) {
                    new_array[i] = this.array[i]
                }
                this.array = new_array;
            }
        }
        this.array[this.length++] = element
    }
    removeAt(index_to_remove) {
        this.checkBound(index_to_remove);
        const data = this.array[index_to_remove]
        let new_array = new Array(this.length - 1)
        for (let i = 0, j = 0; i < this.length; i++, j++) {
            if (i === index_to_remove) j--;
            else new_array[j] = this.array[i]
        }
        this.array = new_array;
        this.capacity = --this.length
        return data
    }
    indexOf(element) {
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === element) {
                return i
            }
        }
        return -1
    }
    contains(element) {
        return this.indexOf(element) != -1
    }

}

const array = new ArrayDS(2)
array.add(1)
array.add(2)
array.add(3)
array.add(4)
array.add(5)
array.add(6)
console.log(array)
array.removeAt(2)
console.log(array)
array.removeAt(0)
console.log(array.contains(64))