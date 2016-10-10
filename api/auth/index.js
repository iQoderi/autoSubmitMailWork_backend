/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const router=require('koa-router')();
const controller=require('./auth.controller');

router.get('/login',controller.login);

module.exports=router;
