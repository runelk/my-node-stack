# My Node Stack

Personal node.js setup for prototypes etc.

## Tech

- [express](http://expressjs.com/) (Routing, REST, etc.)
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe) (handling environment variables)
- [webpack](https://webpack.github.io/) (bundling etc.)
- [sqlite3](https://github.com/mapbox/node-sqlite3) (embedded database)
- [sequelize](http://docs.sequelizejs.com/) (ORM models)
- [ejs](http://ejs.co/) (server-side rendering)
- [react](https://facebook.github.io/react/) (client-side rendering)
- [superagent](https://visionmedia.github.io/superagent/) (ajax)
- [pure.css](http://purecss.io/) (styling)
- [faker](http://marak.github.io/faker.js/) (mock data)

## Views

Views are defined in `src/views`, using the EJS templating language.

## React Components

React components are in `src/clients/components`.

## Routes

Routes are defined in `src/server/routes`. View routes are defined in
`web.js`. REST routes are defined in `api.js`. `index.js` takes care
of importing routes from both of these, adding REST routes to `/api`
urls.

## Sequelize

Use the `sequelize` script in the root folder for working with models,
migrations and seeds. The folders used by Sequelize are specified in
`.sequelizerc`.

SQLite is being used for prototyping. The SQLite database files for
dev, test and prod are to be found in the `db` folder by default.

### Folders

- models: `src/server/database/sequelize/models`
- seeders: `src/server/database/sequelize/seeders`
- migrations: `src/server/database/sequelize/migrations`
- config file: `config/sequelize.json`

### Important Commands

## NPM

- `npm run build` - build client-side javascript

#### Migrating

`./sequelize db:migrate`

#### Models

Creating a model (w/ corresponding migration file): `./sequelize model:create --name [NAME] --attributes "[NAME]:[TYPE], ..."`

#### Seeders

Creating a seed: `./sequelize seed:create --name [NAME]`

Seeding (one seed): `./sequelize db:seed --seed [NAME]`

Seeding (all seeds): `./sequelize db:seed:all`

Revert one seed: `./sequelize db:seed:undo --seed 20161113122914-example-seed`

Revert all seeds: `./sequelize db:seed:undo:all`
