require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

// requiring routes go here:____________________________________
const userRouter = require('./routes/user');
const goalRouter = require('./routes/goal');
const taskRouter = require('./routes/task');



const app = express();
// app.use(logger('dev')); only if we are using morgan
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: process.env.SESSION_NAME,
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2]
}))

app.use(express.static(path.join(__dirname, 'public')));

//routes go here:_____________________________________________
app.use('/api/user', userRouter());
app.use('/api/goal', goalRouter());
app.use('/api/task', taskRouter())

module.exports = app;