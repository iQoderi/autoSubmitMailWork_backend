/**
 * Created by qoder on 16-10-10.
 */
'use strict';

const mongoose=require('mongoose');

exports.login=function *() {
  console.log(this.request);
  this.body={
    test:'success'
  }
};

