const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'band8',
    email: 'band8@email.com',
    password: 'band8'
  },
  {
    username: 'rickross',
    email: 'rossman@email.com',
    password: 'rickross'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;