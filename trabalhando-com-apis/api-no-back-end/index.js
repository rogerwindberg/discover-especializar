// Importa o Express
const express = require('express')

// Instancia o Express na constante "app"
const app = express()

// Fica ouvindo a porta 3000
app.listen('3000')

// Middleware (define que o Express irá utilizar JSON)
app.use(express.json())

// ---------------------------------------------------
// # Método GET
// app.route('/').get((req, res) => res.send("hello"))
// app.route('/sobre').get((req, res) => res.send("sobre"))
// ---------------------------------------------------
// # Método POST
// app.route('/').post((req, res) => res.send(req.body))
// ---------------------------------------------------
// # Método PUT
// let author = "Roger"
// app.route('/').get((req, res) => res.send(author))
// app.route('/').put((req, res) => {
//   author = req.body.author
//   res.send(author)
// })
// ---------------------------------------------------
// # Método DELETE
// app.route('/:id').delete((req, res) => {
//   res.send(req.params.id)
// })
// ---------------------------------------------------