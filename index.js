var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
//var mailRouter = require('./routes/email');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/email',(req,res)=>{
  console.log('Data: ', req.body)
  res.json({message: 'Message recived!!!'})
});


app.use('/', indexRouter);
app.use('/', contactoRouter);



app.listen(process.env.PORT || '3000', () => {
  console.log(` http://localhost:3000`)
})


