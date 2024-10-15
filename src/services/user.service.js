const {save, User, allUsers} = require('../models/user.model');

const addNewUser = (name, lastname, email)=>{
  const newUser = new User(name, lastname, email);
  return save(newUser);
}

const showUsers = () => {
  return allUsers();
}

module.exports = {
  addNewUser,
  showUsers
}

