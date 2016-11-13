# My Node Stack

Personal node.js setup for prototypes etc.

## Tech

- [express.js](http://expressjs.com/)
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
- [webpack](https://webpack.github.io/)
- [sequelize](http://docs.sequelizejs.com/)

## Commands

- `npm run build` - build client-side javascript

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
