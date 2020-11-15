const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-246-115-40.eu-west-1.compute.amazonaws.com',
  database: 'd39p1s370btatt',
  user:'aoiukhjcvyhqnf',
  password: '0148a73fd0da09373b1183ffb94504b6763562b37417a709cc8daeba69f4e55b',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}