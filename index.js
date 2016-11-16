require('dotenv-safe').load();

var path = require('path');
var server = require('./src/server');
var dir_public = path.resolve(__dirname, 'public');
var dir_views = path.resolve(__dirname, 'src', 'server', 'templates');
var app = server(dir_public, dir_views);
