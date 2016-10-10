'use strict';
const koa = require('koa');
const path = require('path');
const route = require('koa-route');
const mongoose=require('mongoose');
const app = module.exports = koa();

const host='123.206.16.40';
mongoose.connect(`mongodb://${host}:27017/autoSubmitMailWork`);


require('./config/koa')(app);

//route
require('./router')(app);


if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
