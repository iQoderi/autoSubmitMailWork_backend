/**
 * Created by qoder on 16-10-11.
 */
'use strict';

const mongoose=require('mongoose');
const userModel=require('../../models/user.model');
const User=mongoose.model('User');


exports.getUserInfo=function *() {
  this.body=this.user;
};
