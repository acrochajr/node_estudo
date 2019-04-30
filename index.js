const express = require('express')
const { createEngine } = require('express-react-views');
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

// setando o local a onde vai ficar os arquivos da views
app.set('views', __dirname + '/views');

// setando as variáveis 'view engine'
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.get('/contato', function (req, res) {
//   res.send('teste!');
// });


app.get('/contato', (req, res, next) => {
  res.render('index.jsx');
 });


app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
