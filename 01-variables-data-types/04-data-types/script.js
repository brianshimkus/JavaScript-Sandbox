// String
const firstName = 'Brian'

// Number
const age = 33
const temp = 98.9

// Boolean
const hasKids = false

// Null
const aptNumber = null

// Undefined
let score

// Symbol
const id = Symbol('id')

// BigInt
const n = 1234567890123456789012345678901234567890n

// Reference Types
const numbers = [1, 2, 3, 4]

const person = {
	name: 'Brian',
	age: 33,
}

function sayHello() {
	console.log('Hello')
}

const output = sayHello

console.log(output, typeof output)
