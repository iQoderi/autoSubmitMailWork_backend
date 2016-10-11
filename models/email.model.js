/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  id: {
    type: String,
    required: true
  },       //email Id
  belongTo: String,    //属于某个用户
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  pass: String
});

module.exports = mongoose.model('Email', emailSchema);
