const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: 'tom',
    email: 'thatguy@facebook.com',
    password: 'password123',
  },
  {
    id: 2,
    name: 'frodobaggins',
    email: 'hobbit@theshire.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;