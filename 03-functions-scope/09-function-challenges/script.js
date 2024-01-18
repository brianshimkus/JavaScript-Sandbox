// Challenge 1
const getCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9)
console.log(`The temperature is ${getCelsius(32)} \xB0C`)

// Challenge 2
function minMax(arr) {
	const min = Math.min(...arr)
	const max = Math.max(...arr)
	return { min, max }
}
console.log(minMax([1, 2, 3, 4, 5]))

// Challenge 3
function calculateArea(l, w) {
	area = l * w

	console.log(
		`The area of a rectangle with a length of ${l} and a width of ${w} is ${area}.`
	)
}
calculateArea(5, 10)
