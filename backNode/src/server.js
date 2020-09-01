const express = require('express');
const routes = require('./routes');
console.log('1')
require('./database');
console.log('2')

const app = express();
const PORT = process.env.PORT || 8080;
console.log(PORT)
console.log('3')
app.use(express.json());
app.use(routes);
app.listen(PORT);
console.log('4')