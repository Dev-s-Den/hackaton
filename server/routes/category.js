const express = require('express');
const router = express.Router();
const { getCategories, getCategoriesByGoal } = require('../db/queries/category');

module.exports = () => {

  router.get('/', (req, res) => {
    getCategories()
      .then(data => res.json(data))
  })

  router.get('/:goal_id', (req, res) => {
    getCategoriesByGoal(req.params.goal_id)
      .then(data => res.json(data))
  })

  return router;
}