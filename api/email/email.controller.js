/**
 * Created by qoder on 16-10-11.
 */
"use strict";

const mongoose=require('mongoose');
const uuid=require('uuid');
const emailModel=require('../../models/email.model');
const Email=mongoose.model('Email');

/**
 * 添加邮箱
 */
exports.addEmail=function *() {
  const body=this.request.body;
  const condition={
    id:uuid.v4(),
    belongTo:body.name,
    email:body.email,
    pass:body.pass
  };

  const newEmail=new Email(condition);
  yield newEmail.save();
  this.body={
    code:0
  }
};


/**
 * 获取邮箱
 */
exports.getEmail=function *() {
  const condition={
    id:this.user.id
  };

  const email=yield Email.find(condition);
  this.body={
    code:0,
    data:{
      email:email
    }
  }
};

