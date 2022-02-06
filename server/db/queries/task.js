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

const addTask = async (name) => {
  const values = [name];
  try {
    const data = await dbConnection.query(`INSERT INTO task(
      name) VALUES ($1) RETURNING *`, values);
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