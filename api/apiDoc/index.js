/**
 * Created by qoder on 16/10/11.
 */
'use strict';

const router = require('koa-router')();
const views=require('co-views');

const render=views(__dirname+'/../../views',{
  map:{html:'swig'}
});

router.get('/', function *() {
  this.body=yield render('api');
});

module.exports = router;
