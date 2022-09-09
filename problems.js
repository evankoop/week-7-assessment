//Problem One

const addToZero = (arr) => {
    let result = false

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i]
        for (let k = i + 1; k < arr.length; k++) {
            if (currNum + arr[k] === 0) {
                result = true
            } 
        }
    }
    return result
}
console.log(addToZero([1, 5, 4, 2, 0]))

//Runtime is O(n^2) because I used a nested for loop.
//Space complexity is O(n) because space will be determined by input size

const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let k = i + 1; k < str.length; k++) {
            if (str[i] === str[k]) {
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars('Moonday'))

//Runtime is O(n^2) because I used a nested for loop.
//Space complexity is O(n) because space will be determined by length of string

const alphabet = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const isPanagram = (str) => {
    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (alphabet.every((e) => str.includes(e))) {
            return true
        }
    }
    return false
}
console.log(isPanagram('The quick brown fox jumps over the lazy dog!'))

//Runtime is O(n) because the length of the string can change which can change the runtime.
//Space complexity is O(n) because the space will be determined by length of the string. 

const findLongestWord = (arr) => {
    let longest = null

    for (let i = 0; i < arr.length; i++) {
        let currVal = arr[i]
        for (let k = i + 1; k < arr.length; k++) {
            if (currVal.length > arr[k].length) {
               longest = currVal.length
            } else {
                longest = arr[k].length
            }
        }
    }
    return longest
}
console.log(findLongestWord(['boat', 'catcatcat', 'speedspeedspeed']))

//Runtime is O(n^2) because we are nesting over the array twice.
//Space complexity is O(n) because the space will be determined by the length of the array.