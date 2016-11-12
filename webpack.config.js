const path = require('path');

const PATHS = {
  client: path.resolve(__dirname, 'src', 'client'),
  public: path.resolve(__dirname, 'public')
};

module.exports = {
  entry: {
    index: path.resolve(PATHS.client, 'index.js')
  },
  output: {
    path: path.resolve(PATHS.public, 'js'),
    filename: '[name].js'
  }
};
