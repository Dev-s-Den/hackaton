const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask } = require('../db/queries/task');

module.exports = () => {
  router.get('/:goal_id', (req, res) => {
    getTasks(req.params.goal_id)
      .then(data => res.json(data))
  })

  router.post('/', (req, res) => {
    addTask(req.body.tasks, req.body.goal_id)
      .then(data => res.json(data))
  })

  router.put('/:id', (req, res) => {

    updateTask(req.params.id, req.body.completed)
      .then(data => res.json(data))
  })


  return router;
}