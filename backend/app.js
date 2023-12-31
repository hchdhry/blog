var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
const bcrypt = require("bcryptjs")
const passport = require("./logic/passport")

require("dotenv").config();

const yee = process.env.yee;
const secret = process.env.secret;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = yee

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("yee")
}
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);;
});



app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
