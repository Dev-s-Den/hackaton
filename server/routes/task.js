const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask } = require('../db/queries/task');

module.exports = () => {
  router.get('/:task_id', (req, res) => {
    getTasks(req.params.id)
      .then(data => res.json(data))
  })

  router.post('', (req, res) => {
    addTask(req.body.name)
      .then(data => res.json(data))
  })

  router.put('/:id', (req, res) => {
    updateTask(req.body.id, req.body.completed)
      .then(data => res.json(data))
  })


  return router;
}