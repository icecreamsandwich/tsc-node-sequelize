module.exports =
{
  "development": {
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
