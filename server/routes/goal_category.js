const express = require('express');
const router = express.Router();
const { createCategories } = require('../db/queries/goal_categories')


module.exports = () => {

  router.post('/', (req, res) => {
    createCategories(req.body.goal_id, req.body.category_id)
      .then(data => res.json(data))
  })

  return router
}