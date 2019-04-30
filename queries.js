const Pool = require('pg').Pool
const pool = new Pool({
  user: 'estudo',
  host: 'localhost',
  database: 'api',
  password: 'e24rh33b',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM usuarios WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { nome, email } = request.body
 
 if(request.body.nome){

    pool.query('INSERT INTO usuarios (nome, email) VALUES ($1, $2)', [nome, email], (error, results) => {
      if (error) {
        throw error
      }
    response.status(201).send(`User added with ID:`  + [nome, email])
    })
  } else {
    response.status(200).send(`Problema no envio dos dados`)
  }
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { nome, email } = request.body

  pool.query(
    'UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3',
    [nome, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      //response.status(200).send(`User modified with ID: ${id}`)
      response.status(200).json({id: [id], nome: [nome], email: [email]})
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM usuarios WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
