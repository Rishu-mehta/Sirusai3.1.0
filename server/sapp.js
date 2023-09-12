const express = require('express');
const app = express();

// Import the database connection module using require
require('./database/connection');
// const user= require ('./schemafolder/contactschema');
app.use(express.json());
app.use(require ('./router/auth'));



app.listen(4000, () => {
  console.log("server is running");
});
