// Copyright Adewumi Sunkanmi Data structures Repository 
// sunkanmiadewumi1@gmail.com
// Available for anyone who wants to learn how to use the stack to validate brackets
const Stack = require("../Stack-Implementations/stack-from-double-linked-list")
// key (bracket): value (reverse bracket) 
const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']'
}

// to check if the bracket is a left bracket
function isLeftBracket(bracket) {
    if (bracketsMap[bracket]) return true
}


function validate_bracket(bracket_string) {
    // Create an instance of Stack(from double-linked list)
    const stack = new Stack()
    for (let i of bracket_string) {
        // Check if bracket is left
        if (isLeftBracket(i)) {
            // push to Stack
            stack.push(i)
        }
        else {
            // if Stack is empty and you want to insert a right bracket return false
            if (stack.size() === 0) {
                return false
            }
            // Get the previous bracket
            let previousBracket = stack.pop()

            // check if the current bracket is equal to the reverse of the previous bracket return false
            if (i !== bracketsMap[previousBracket.data]) {
                return false
            }
        }
    }
    // if the Stack is empty and all validations are done, return true
    if (stack.size() === 0) return true;
}

const valid = validate_bracket('(())[]{{}}')// true
//const valid = validate_bracket('((]()')// false
console.log(valid)