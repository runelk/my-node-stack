const path = require('path');
const validate = require('webpack-validator');

const PATHS = {
  client: path.resolve(__dirname, 'src', 'client'),
  public: path.resolve(__dirname, 'public')
};

const config = {
  entry: {
    index: path.resolve(PATHS.client, 'index.js')
  },
  output: {
    path: path.resolve(PATHS.public, 'js'),
    filename: '[name].js'
  }
};

module.exports = validate(config);
