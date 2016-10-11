/**
 * Created by qoder on 16-10-11.
 */
"use strict";

const mongoose=require('mongoose');
const emailModel=require('../../models/email.model');
const Email=mongoose.model('Email');

/**
 * 添加邮箱
 */
exports.addEmail=function *() {
  this.body={
    code:0
  }
};
