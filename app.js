const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./routes/index')(app);
// app.get('*', (req, res) => res.status(200).send({
//   message: 'index routes',
// }));

app.get('/', function(req, res) {
  res.render('index');
});


module.exports = app;

