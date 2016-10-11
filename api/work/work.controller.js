/**
 * Created by qoder on 16-10-11.
 */
'use strict';

const mongoose = require('mongoose');
const workModel = require('../../models/work.model');
const checkData=require('../../util/checkData');
const Work = mongoose.model('Work');

/**
 * 提交作业
 */
exports.addWork = function *() {
  const body=this.request.body;
  if(checkData(body)){

  }else{

  }
};
