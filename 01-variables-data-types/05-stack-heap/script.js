// Values are stored on the stack
const name = 'Brian'
const age = 33

// Reference values are stored on the heap
const person = {
	name: 'Brian',
	age: 33,
}

let newName = name
newName = 'John'

let newPerson = person
newPerson.name = 'John'

console.log(name, newName)
console.log(person, newPerson)
