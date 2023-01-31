const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

// Middleware (define que o Express irá utilizar JSON)
app.use(express.json())

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/rogerwindberg')
  .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
  .catch(error => console.error(error))
})