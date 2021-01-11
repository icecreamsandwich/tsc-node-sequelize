## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`

Install a MySQL database.

> If you work with a mac, we recommend to use homebrew for the installation.

### Step 2: Install dependencies

Go to the project dir and run the following script.

```bash
npm install
```

> This will install all the dependencies needs for the project

### Step 3:  Install and configure typescript

```bash
npm i -g tsc
```
> This will install typescript globally

```bash
tsc --init
```
> This will will create a typescript config file `tsconfig.json`


### Step 4:  Install and configure sequelize-cli

```bash
npm i -g sequelize-cli
```
> This will install sequelize-cli globally

```bash
sequelize init
```
> This will create a config.json file inside the config folder. 

We can additionally specify in which folder we have to create the models, migrations and seeds in the `.sequelizerc` file.


### Creating a model

- Run `npx sequelize-cli model:generate --name User --attributes firstName:string`

> The above command will create a User model with the firstname attribute(field in the table)

### Database Migration

- Run `npx sequelize-cli db:migrate` to run all migrations.

### Database Seeding

- Run `npx sequelize-cli db:seed:all ` to seed your seeds into the database.

### Modifying the npm scripts

- modify the script part in the package.json as follows: 
```bash
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ."
```
> When run the build command, typscript will create the build in the dist folder. Then if we run the start command it will take the compiled js from the dist folder. If we just need to the application in dev mode then it will take the server file (`app.ts`) and run the application on a port

### Running in dev mode

- Run `npm run dev` to start nodemon with ts-node, to serve the app.
- The server address will be displayed to you as `http://0.0.0.0:3000`

### Building the project and run it

- Run `npm run build` to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called `build`).
- To start the builded app located in `dist` use `npm start`.


### NOTE:
As the db models and migrations  created by the sequlize cli is based on ES5, the code on that part wont be in typescript. Instead it will follow the ES5 structure.