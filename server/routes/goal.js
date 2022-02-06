const express = require('express');
const router = express.Router();
const { getGoals, addGoal, deleteGoal, updateTasks } = require('../db/queries/goal');

module.exports = () => {

  router.get('/:userID', (req, res) => {
    getGoals(req.params.id)
      .then(data => res.json(data))
  })

  router.post('/:userID', (req, res) => {
    addGoal(req.body.user_id, req.body.content, req.body.name, req.body.goal_end)
      .then(data => res.json(data))
  })

  router.put('/goal/:id', (req, res) => {
    updatePostsLikes(req.body.id, req.body.like)
      .then(data => res.json(data))
  })



  return router
}