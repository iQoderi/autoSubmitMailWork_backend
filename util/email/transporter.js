/**
 * Created by qoder on 16-10-11.
 */
"use strict";

const nodeEmailer=require('nodemailer');

function transporterMaker(auth,host='smtp.163.com',port=465) {
  //开启一个SMTP连接池
  const  transporter=nodeEmailer.createTransport("SMTP",{
    host:host,   //主机
    secureConnection:true,   //使用SSL,
    port:port,    //SMTP端口
    auth:auth
  });

  return transporter;
}


module.exports=transporterMaker;
