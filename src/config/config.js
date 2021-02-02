require('dotenv');
module.exports =
{
  "development": {
    "username":"root",
    "password": "mZS*uKqRDCeJxO9",
    "database": "tsc_node_sequelize",
    "host": "localhost",
    "dialect": "mysql"
  },
  "development_ENV": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database": process.env.DB,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": null,
    "database": "database_test",
    "host": "",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": null,
    "database": "database_production",
    "host": "",
    "dialect": "mysql"
  }
}
