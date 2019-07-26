// the address of our rails backend
const BASE = 'http://localhost:3000'

let getCats = function() {

	return fetch(BASE + '/cats')
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),
		headers: { 'Content-Type': 'application/json' },
		method: "POST"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let deleteCat = function(id) {
	return fetch(BASE + '/cats/' + id, {
		body: JSON.stringify(id),
		headers: { 'Content-Type': 'application/json' },
		method: "DELETE"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}


export { getCats }
export { createCat }
export { deleteCat }
