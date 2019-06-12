'use strict';

module.exports = {
  generateData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateData(userContext, events, done) {
  const username = Faker.internet.userName()
  const game = Faker.random.word()
  // add variables to virtual user's context:
  userContext.vars.username = username
  userContext.vars.game = game
  // continue with executing the scenario:
  return done();
}

// can not use the following code because we do not have a babel/webpack configuration for running this script
// import Faker from "faker"

// export const generateData = (userContext, events, done) => {

//   const username = Faker.internet.userName()
//   const game = Faker.random.word()
//   // add variables to virtual user's context:
//   userContext.vars.username = username
//   userContext.vars.game = game
//   // continue with executing the scenario:
//   return done()
// }
