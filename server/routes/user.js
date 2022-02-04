const express = require('express');
const router = express.Router();
const { getUser, addUser, checkUser } = require('./db/queries/user')