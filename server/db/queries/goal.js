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
  const values = [userID, name, content, goal_end]
  try {
    const data = await dbConnection.query(`INSERT INTO goal(
      user_id, name, content, goal_end) VALUES ($1, $2, $3, $4)`, values);
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}