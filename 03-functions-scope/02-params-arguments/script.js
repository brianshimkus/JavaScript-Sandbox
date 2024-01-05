// Default params
function registerUser(user = 'Bot') {
	return user + ' is registered'
}

console.log(registerUser())

// Rest params
function sum(...numbers) {
	let total = 0

	for (const num of numbers) {
		total += num
	}

	return total
}

console.log(sum(1, 2, 3, 4, 5))

// Object as params
function loginUser(user) {
	return `${user.name} with the id of ${user.id} is logged in`
}

const user = { id: 1, name: 'John' }

console.log(loginUser(user))

// Array as params
function getRandom(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length)

	const item = arr[randomIndex]

	console.log(item)
}

getRandom([1, 2, 3, 4, 5])
