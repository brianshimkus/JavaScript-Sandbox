// Step 1
const library = [
	{
		id: 1,
		title: 'Title 1',
		author: 'Author 1',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		id: 2,
		title: 'Title 2',
		author: 'Author 2',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		id: 3,
		title: 'Title 3',
		author: 'Author 3',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
]

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3
const { title: firstBook } = library[0]

// Step 4
const libraryJSON = JSON.stringify(library)
console.log(libraryJSON)
