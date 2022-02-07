const dbConnection = require('../connection');

const getTasks = async (goal_id) => {
  const values = [goal_id];
  try {
    const data = await dbConnection.query('SELECT * FROM task WHERE goal_id=$1', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addTask = async (tasks, goal_id) => {
  let string = ' '
  const values = [];
  tasks.forEach(element => {
    values.push(element);
    values.push(goal_id);
  });
  for (let i = 0; i <= values.length; i + 2) {
    string += `( $${values[i]}, $${values[i + 1]} ) `
  }

  try {
    const data = await dbConnection.query(`INSERT INTO task(name, goal_id) VALUES ${string} RETURNING *`, values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const updateTask = async (id, boolean) => {
  const values = [boolean, id];
  try {
    const data = await dbConnection.query(`UPDATE task SET
    completed = $1 WHERE  id=$2 RETURNING *`, values)
    return data.rows
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}


module.exports = { getTasks, addTask, updateTask }