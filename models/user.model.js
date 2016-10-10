/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let UserSchema=new Schema({
  id:String,
  username:String,
  password:String
});


module.exports=mongoose.model('User',UserSchema);
