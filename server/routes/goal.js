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

  router.put('/:id', (req, res) => {
    updateTasks(req.body.id, req.body.content)
      .then(data => res.json(data))
  })

  router.delete('/:id', (req, res) => {
    deleteGoal(req.body.id)
      .then(data => res.json(data))
  })

  return router
}