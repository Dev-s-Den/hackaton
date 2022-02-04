const dbConnection = require('../connection');

const getUsers = async (email) => {
  const values = [email];
  try {
    const data = await dbConnection.query('SELECT * FROM users WHERE email=$1;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addUsers = async (first_name, last_name, email, password) => {
  const values = [first_name, last_name, email, password];
  try {
    const data = await dbConnection.query('INSERT INTO user (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }

}
const checkUser = async (email) => {
  const values = [email];
  try {
    const data = await dbConnection.query('SELECT * FROM users WHERE email=$1;', values)
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getUsers, addUsers, checkUser }