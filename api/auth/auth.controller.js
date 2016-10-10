/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');
const UserModel=require('../../models/user.model');
const User=mongoose.model('User');

exports.login=function *() {
  console.log(this.request.body);
  const body=this.request.body;
  if(body.password&&body.username){
    const condition={
      username:body.username,
      password:body.password
    };
    const user=yield User.findOne(condition);
    this.body=user;
  }else{
    this.body={
      code:10001
    }
  }
};

