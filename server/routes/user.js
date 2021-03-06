const express = require('express');
const router = express.Router();
const { getUser, addUser, checkUser, getUserById } = require('../db/queries/user')
const bcrypt = require('bcryptjs');

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
            req.session.id = data[0].id;
            res.send({
              cookie: req.session.id,
              id: data[0].id,
              first_name: data[0].first_name,
              last_name: data[0].last_name,
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
          cookie: req.session.id = data[0].id,
          id: data[0].id,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
          email: data[0].email
        })
      })
  })

  //get from login
  router.get('/login', (req, res) => {
    const user_email = req.session.id
    if (user_email) {
      getUserById(user_email).then(data => {
        res.json({
          id: data[0].id,
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
    delete req.session.id
    res.status(200).send('session deleted')
  })

  return router;
}