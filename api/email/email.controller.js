/**
 * Created by qoder on 16-10-11.
 */
"use strict";

const mongoose = require('mongoose');
const uuid = require('uuid');
const emailModel = require('../../models/email.model');
const checkData = require('../../util/checkData');
const Email = mongoose.model('Email');


/**
 * 获取邮箱
 */
exports.getEmail = function *() {
  const condition = {
    id: this.user.id
  };

  const email = yield Email.find(condition);
  this.body = {
    code: 0,
    data: {
      email: email
    }
  }
};

/**
 * 添加邮箱
 */
exports.addEmail = function *() {
  const body = this.request.body;
  const condition = {
    id: uuid.v4(),
    belongTo: body.name,
    email: body.email,
    pass: body.pass
  };

  if (checkData(condition)) {
    const newEmail = new Email(condition);
    yield newEmail.save();
    this.body = {
      code: 0
    }
  } else {
    this.body = {
      code: 10001

    }
  }
};

/**
 * 编辑邮箱
 */
exports.modifyEmail = function *() {
  const body = this.request.body;
  if (checkData(body)) {
    let condition = {
      id:this.params.id
    };
    let update=body;
    const email=yield Email.update(condition.update)
    console.log(email);
    this.body={
      code:0
    };
  } else {
    this.body = {
      code: 10001
    }
  }
};

/**
 * 删除邮箱
 */
exports.deleteEmail=function *() {
  const condition={id:this.params.id};
  const email=yield Email.remove(condition);
  this.body={
    code:0
  }
};


