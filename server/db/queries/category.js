const dbConnection = require('../connection');

const getCategories = async () => {
  try {
    const data = await dbConnection.query('SELECT * FROM category;');
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const getCategoriesByGoal = async (goalId) => {
  const values = [goalId];
  try {
    const data = await dbConnection.query('SELECT category_id, goal_id, name, color  FROM category JOIN goal_category ON goal_category.category_id = category.id WHERE goal_id = $1;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getCategories, getCategoriesByGoal };