/*
array-toolbox.mjs`
•
•
•
•
•
`sum(numbers)`: Returns the total of all numbers in an array.
`average(numbers)`: Returns the average of the numbers in an array. Return 0 if the array is
empty.
`unique(array)`: Returns a new array with duplicate values removed while preserving the
original order.
`chunk(array, size)`: Divides an array into smaller arrays containing no more than the
specified number of elements.
`intersection(firstArray, secondArray)`: Returns a new array containing the unique
values found in both arrays.
*/

// Returns the total of all numbers in an array.
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Returns the average of the numbers in an array. Return 0 if the array is empty.
function average(numbers) {
    return sum(numbers) /numbers.length;
}

// Returns a new array with duplicate values removed while preserving the original order.
function unique(array) {
    const output = [...a1];

    return output;
}

// Divides an array into smaller arrays containing no more than the specified number of elements.
function chunk(array, size) {
    const output = [];
    for (let i = 0; i < array.length; i += size) {
        output.push(array.slice(i, i + size));
    }
    return output;
}

// Returns a new array containing the unique values found in both arrays.
function intersection(firstArray, secondArray) {

}


const arr = [1, 2, 3, 4];

console.log( average(arr) );
console.log( sum(arr) );

console.log( chunk(arr, 2) );
