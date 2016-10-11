/**
 * Created by qoder on 16/10/11.
 */
'use strict';

const transporter = require('./transporter');

function emailSender(data, auth, cxt, host = 'smtp.163.com', port = 465) {
  let myTransporter = transporter(auth, host, port);
  myTransporter.sendMail(data, (err, info)=> {
    if (err) {
      cxt.body = {code:10009};
    } else {
      if (info) {
        cxt.body = {
          code: 0
        }
      }
    }
  });
}


module.exports = emailSender;
