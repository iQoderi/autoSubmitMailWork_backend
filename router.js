/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const Router=require('koa-router')();
const auth=require('./api/auth');
const user=require('./api/user');

module.exports=function (app) {
  Router.use('/auth',auth.routes(),auth.allowedMethods());
  Router.use('/user',user.routes(),auth.allowedMethods());
  Router.get("/*",function *() {
    this.body={status:'success',data:"齐超是个帅比"};
  });
  app.use(Router.routes());
};
