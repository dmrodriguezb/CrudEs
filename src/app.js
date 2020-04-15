const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connection to db
//var mongo="mongodb+srv://Dulce:123@escuela-sxkiv.mongodb.net/test?retryWrites=true&w=majority"
var mongo ="mongodb+srv://admin:2511@estudiante-xdvw7.azure.mongodb.net/Escuela?retryWrites=true&w=majority"
//mongodb+srv://admin:<password>@estudiante-xdvw7.azure.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(mongo)

//mongoose.connect('mongodb://localhost/Escuela')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);

  });
