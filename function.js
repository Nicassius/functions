//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test the function
console.log(reverseString("hello")); // ➞ "olleh"
console.log(reverseString("world")); // ➞ "dlrow"


//Count Characters
function countCharacters(str) {
    return str.length;
}

// Test the function
console.log(countCharacters("hello")); // ➞ 5
console.log(countCharacters("world")); // ➞ 5


//Capitalize Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Test the function
console.log(capitalizeWords("hello world")); // ➞ "Hello World"
console.log(capitalizeWords("javascript is awesome")); // ➞ "Javascript Is Awesome"


//Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Test the functions
console.log(findMax([1, 5, 3, 7])); // ➞ 7
console.log(findMin([1, 5, 3, 7])); // ➞ 1



//Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Test the function
console.log(sumArray([1, 2, 3, 4])); // ➞ 10
console.log(sumArray([5, 10, 15])); // ➞ 30


//Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Test the function
const isEven = num => num % 2 === 0;
console.log(filterArray([1, 2, 3, 4, 5], isEven)); // ➞ [2, 4]
const isPositive = num => num > 0;
console.log(filterArray([-1, 2, -3, 4, -5], isPositive)); // ➞ [2, 4]



//Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the function
console.log(factorial(5)); // ➞ 120
console.log(factorial(0)); // ➞ 1
console.log(factorial(1)); // ➞ 1



//Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Test the function
console.log(isPrime(5)); // ➞ true
console.log(isPrime(12)); // ➞ false
console.log(isPrime(17)); // ➞ true



//Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Test the function
console.log(fibonacci(5)); // ➞ [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // ➞ [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
