/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const emailSchema=new Schema({
  belongTo:String,    //属于某个用户
  accountId:String,       //属于那个账户
  email:{
    type:String,
    lowercase:true
  },
  pass:String
});

module.exports=mongoose.model('Email',emailSchema);
