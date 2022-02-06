const dbConnection = require('../connection');

const getGoals = async (userId) => {
  const values = [userId];
  try {
    const data = await dbConnection.query('SELECT * FROM goal WHERE user_id=$1', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addGoal = async (userID, name, content, goal_end) => {
  const values = [userID, name, content, goal_end];
  try {
    const data = await dbConnection.query(`INSERT INTO goal(
      user_id, name, goal_end) VALUES ($1, $2, $3, $4) RETURNING *`, values);
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const deleteGoal = async (goalID) => {
  const values = [goalID];
  try {
    const data = await dbConnection.query(`DELETE FROM goal WHERE id=$1`, values)
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const updateTasks = async (goalID, task_id) => {
  const values = [task_id, goalID];
  try {
    const data = await dbConnection.query(`UPDATE goal SET task_id = $1 WHERE id=$2`, values)
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}


module.exports = { getGoals, addGoal, deleteGoal, updateTasks };