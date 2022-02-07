const express = require('express');
const router = express.Router();
const { getGoals, addGoal, deleteGoal, updateTasks } = require('../db/queries/goal');

module.exports = () => {

  router.get('/:userID', (req, res) => {
    getGoals(req.params.userID)
      .then(data => res.json(data))
  })

  router.post('/:userID', (req, res) => {
    addGoal(req.body.user_id, req.body.name, req.body.goal_end)
      .then(data => res.json(data))
  })

  // Thiiiiis will create an issue for updating the task i believe, but we will see perhaps it should be a task query
  router.put('/:id', (req, res) => {
    updateTasks(req.body.id, req.body.task_id)
      .then(data => res.json(data))
  })

  router.delete('/:id', (req, res) => {
    deleteGoal(req.body.id)
      .then(data => res.json(data))
  })

  return router;
}