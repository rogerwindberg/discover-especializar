const express = require('express')

const app = express()

app.listen('3000')

// Middleware (define que o Express irá utilizar JSON)
app.use(express.json())

// app.route('/').get((req, res) => res.send(req.query.name))
// app.route('/').post((req, res) => res.send(req.body))
// app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

// ---------------------------------------------------
// # Body Params
// app.route('/').post((req, res) => {
//   const {nome, cidade} = req.body
//   res.send(`Meu nome é ${nome} e moro em ${cidade}.`)
// })
// ---------------------------------------------------
// # Route Params
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
// app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
// ---------------------------------------------------
// # Query Params
// app.route('/').get((req, res) => res.send(req.query))
// app.route('/about/user').get((req, res) => res.send(req.query))
// ---------------------------------------------------