import jwt from "./jwt";

const hash = jwt.gen({alg:'sha256'}, {user_id:1}, 'secret_key')
console.log(jwt.verify(hash, 'secret_key'));