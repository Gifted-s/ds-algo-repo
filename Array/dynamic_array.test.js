const Array = require("./dynamic_array")

describe('create method', () => {
    let new_array = new Array(5)

    test("Expect created array to have the specified capacity", function () {
        expect(new_array.capacity).toBe(5)
    })
    test("Expect created array to have a length of 0", function () {
        expect(new_array.length).toBe(0)
    })
})


describe('checkbounds method', () => {
    let new_array = new Array(5)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect checkbounds function to return true if index exheed length", function () {
        expect(() => new_array.checkBound(4)).toThrow("index is out of bound")
    })
    test("Expect  checkbounds  function to return true if index is less than 0", function () {
        expect(() => new_array.checkBound(-2)).toThrow("index is out of bound")
    })
    // test("Expect created array to have a length of 0", function () {
    //     expect(new_array.length).toBe(0)
    // })

})


describe('Add method', () => {
    let new_array = new Array(5)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Add method top return true", function () {
        expect(new_array.add(9)).toBe(true)
    })
    test("Expect length to increase by one each time we add new element", function () {
        let new_array = new Array(5)
        new_array.add(10)
        expect(new_array.length).toBe(1)
        new_array.add(11)
        expect(new_array.length).toBe(2)
        new_array.add(12)
        expect(new_array.length).toBe(3)
        new_array.add(13)
        expect(new_array.length).toBe(4)
    })

    test("Expect array to contain added element", function () {
        let new_array = new Array(5)
        new_array.add(10)
        expect(new_array.contains(10)).toBe(true)
        new_array.add(11)
        expect(new_array.contains(11)).toBe(true)
        new_array.add(12)
        expect(new_array.contains(12)).toBe(true)
        new_array.add(13)
        expect(new_array.contains(13)).toBe(true)
    })



    test("Expect capacity to be doubled if treshold is exheeded", function () {
        let new_array = new Array(3)
        new_array.add(10)
        new_array.add(11)
        new_array.add(12)
        new_array.add(13)
        expect(new_array.capacity).toBe(6)
    })

})






describe('Remove method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect remove function to return element that was removed", function () {
        expect(new_array.removeAt(1)).toBe(7)
    })
    test("Expect length to decrease by one each time we remove an element", function () {
        let new_array = new Array(5)
        new_array.add(3) // index 0
        new_array.add(7) // index 1
        new_array.add(8) // index 2
        new_array.add(11) // index 3
        new_array.removeAt(3)
        expect(new_array.length).toBe(3)
        new_array.removeAt(2)
        expect(new_array.length).toBe(2)
        new_array.removeAt(1)
        expect(new_array.length).toBe(1)
    })

    test("Expect array not to contain the removed element after removal", function () {
        let new_array = new Array(5)
        new_array.add(10)
        new_array.add(11)
        new_array.add(12)
        new_array.removeAt(0)
        expect(new_array.contains(10)).toBe(false)
    })



    test("Expect capacity to equal length after removal", function () {
        let new_array = new Array(3)
        new_array.add(10)
        new_array.add(11)
        new_array.add(12)
        new_array.add(13)
        new_array.removeAt(3)
        expect(new_array.length).toBe(3)
        expect(new_array.capacity).toBe(3)
    })

})





describe('size method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect size method to return length of the dynamic array", function () {
        expect(new_array.size()).toBe(3)
    })
})


describe('IsEmpty method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect IsEmpty Method to return false if the array is not empty", function () {
        expect(new_array.isEmpty()).toBe(false)
    })
    test("Expect IsEmpty Method to return true if the array is empty", function () {
        let new_array = new Array(3)
        expect(new_array.isEmpty()).toBe(true)
    })
})


describe('clear method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect Clear method to return true", function () {
        expect(new_array.clear()).toBe(true)
        expect(new_array.length).toBe(0)
    })

})



describe('Get method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect Get method to return element at index", function () {
        expect(new_array.get(2)).toBe(8)
    })

})


describe('set method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect Set method to return true is set was successful", function () {
        expect( new_array.set(2,10)).toBe(true)
    })
    test("Expect element at index to change to new element", function () {
        expect( new_array.array[2]).toBe(10)
    })
})


describe('indexOf method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect IndexOf method to return -1 if element was not found", function () {
        expect( new_array.indexOf(4)).toBe(-1)
    })
    test("Expect IndexOf method to return element index if element was  found", function () {
        expect( new_array.indexOf(8)).toBe(2)
    })
    test("Expect IndexOf method to return element index if element was  found", function () {
        new_array.add(8) // index 3
        expect( new_array.indexOf(8)).toBe(2)
    })
})



describe('contains method', () => {
    let new_array = new Array(3)
    new_array.add(3) // index 0
    new_array.add(7) // index 1
    new_array.add(8) // index 2
    test("Expect Contains method to return false if element was not found", function () {
        expect( new_array.contains(4)).toBe(false)
    })
    test("Expect Contains method to return true if element was not found", function () {
        expect( new_array.contains(3)).toBe(true)
    })
})