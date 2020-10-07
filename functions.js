const axios = require('axios');

const functions = {
    add: (x, y) => x + y,
    fetchUser: () => axios.get('http://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => console.error(err.message)),
    fetchAnotherUser: () => axios.get('http://jsonplaceholder.typicode.com/users/5')
        .then(res => res.data)
        .catch(err => console.error(err.message))
}

module.exports = functions;