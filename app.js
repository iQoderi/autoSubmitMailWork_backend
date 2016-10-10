'use strict';
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const mongoose=require('mongoose');
const app = module.exports = koa();

const host='123.206.16.40';
mongoose.connect(`mongodb://${host}:27017/autoSubmitMailWork`);
// Logger
app.use(logger());



// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

//route
require('./router')(app);


if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
