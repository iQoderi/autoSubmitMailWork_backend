/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');
const uuid=require('uuid');
const UserModel=require('../../models/user.model');
const User=mongoose.model('User');

exports.register=function *() {
  const body=this.request.body;
  if(body.username&&body.password){
    const user=yield User.findOne({username:body.username});
    if(user){
      this.body={
        code:10004
      };
    }else{
      const condition={
        id:uuid.v4(),
        username:body.username,
        password:body.password
      };
      const newUser=new User(condition);
      const savedUser=yield newUser.save();
      console.log(savedUser);
      this.body=savedUser;
    }
  }else{
    this.body={
      code:10001
    };
  }
};

/**
 * user login
 */
exports.login=function *() {
  const body=this.request.body;
  if(body.username&&body.password){
    const condition={
      username:body.username,
      password:body.password
    };
    const user=yield User.findOne(condition);
    if(user){
      this.body={
        code:0,
        data:{
          user:user
        }
      }
    }else{
      this.body={
        code:10002
      }
    }
  }else{
    this.body={
      code:10001
    }
  }
};

