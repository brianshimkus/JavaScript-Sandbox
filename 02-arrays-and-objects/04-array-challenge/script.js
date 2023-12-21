const arr = [1, 2, 3, 4, 5]

console.log(arr.concat(6).reverse().concat(0))
// [6, 5, 4, 3, 2, 1, 0];

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

const arr3 = arr1.splice(0, 4).concat(arr2)

console.log(arr3)
// [1,2,3,4,5,6,7,8,9,10]
