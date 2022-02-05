const express = require('express');
const router = express.Router();
const { getUser, addUser, checkUser } = require('../db/queries/user')
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const { restart } = require('nodemon');


module.exports = () => {
  //get user from Database once you are logged in.
  router.get('/', (req, res) => {
    getUser(req.body.email).then(data => res.json(data));
  })

  //create user
  router.post('/', (req, res) => {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
      .then(salt => {
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        addUser(req.body.first_name, req.body.last_name, req.body.email, hashPassword)
          .then(data => {
            res.send({
              cookie: req.session.email = data[0].email,
              first_name: data[0].first_name,
              last_name: data[0].last_name,
              email: data[0].email
            })
          })
      })
  })

  //login with a post
  router.post('/login', (req, res) => {
    checkUser(req.body.email)
      .then(data => {
        if (!bcrypt.compareSync(req.body.password, data[0].password)) {
          return res.send('Incorrect Credentials').status(403);
        }
        res.send({
          cookie: req.session.email = data[0].email,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email: data[0].email
        })
      })
  })

  //get from login
  router.get('/login', (req, res) => {
    const user_email = req.session.email
    if (user_email) {
      getUser(user_email).then(data => {
        res.json({
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email: data[0].email
        })
      })
    } else {
      return res.status(403).send('Not Logged In')
    }
  })

  router.get('logout', (req, res) => {
    delete req.session.email
    res.status(200).send('session deleted')
  })

  return router;
}