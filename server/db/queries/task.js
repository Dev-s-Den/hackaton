const dbConnection = require('../connection');

const getTasks = async (task_id) => {
  const values = [task_id];
  try {
    const data = await dbConnection.query('SELECT * FROM task WHERE id=$1', values);
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

const updatetask = async (id, boolean) => {
  const values = [boolean];
  try {
    const data = await dbConnection.query(`UPDATE task SET
    completed = $1 WHERE  id=$1`, values)
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}