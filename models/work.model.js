/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let workSchema=new Schema({
  userId:{
    type:String,
    required:true
  },
  belongTo:{
    type:String,
    required:true
  },
  sendTo:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  createAt:{
    type:Date,
    required:true
  }
});

module.exports=mongoose.model('Work',workSchema);
