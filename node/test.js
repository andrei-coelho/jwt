const jwt = require('./jwt.js')

const key  = 'secret_key'
const hash = jwt.gen({alg:'sha256'}, {user_id:1}, key)

console.log(hash, jwt.verify(hash, key));