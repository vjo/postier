// On production, variables are set with `now secrets`. On development, they use the .env file
require("dotenv").config();

module.exports = {
  env: {
    OKAPI_KEY: process.env.OKAPI_KEY,
  },
};
