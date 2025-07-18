// In-memory user store (replace with DB later)
const users = [];

const createUser = ({ username, passwordHash }) => {
  const newUser = { id: Date.now(), username, passwordHash };
  users.push(newUser);
  return newUser;
};

const findUserByUsername = (username) => users.find(u => u.username === username);

module.exports = { users, createUser, findUserByUsername };