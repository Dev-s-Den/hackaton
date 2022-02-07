const dbConnection = require('../connection');

const createCategories = async (goal_id, category_id) => {
  const values = [goal_id, category_id]
  try {
    const data = await dbConnection.query('INSERT INTO goal_category(goal_id, category_id) VALUES ($1,$2) returning *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { createCategories };