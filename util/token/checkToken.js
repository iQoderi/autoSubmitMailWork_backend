/**
 * Created by qoder on 16-10-11.
 */
'use strict';

const mongoose=require('mongoose');
const userModel=require('../../models/user.model');
const User=mongoose.model('User');

function *checkToken(next) {
    const token=this.request.header.token||this.query.token;
    const condition={
      token:{
        token:token
      }
    };
  const user=yield User.findOne(condition);
  console.log(user);
  this.user=user;
  yield next;
}

module.exports=checkToken;
