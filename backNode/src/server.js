const express = require('express');
const routes = require('./routes');
require('./database');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(routes);
app.listen(PORT);