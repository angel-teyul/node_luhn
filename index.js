const express = require('express');
const app = express();
const { config } = require('./config/index');
const controllers = require('./routes/index.js');
app.use(express.json());
controllers(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});

const { conexion } = require('./config/index');

app.listen(conexion.port, function() {
  console.log(`Listening at http://localhost:${conexion.port}`)
})
