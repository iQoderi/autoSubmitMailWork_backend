/**
 * Created by qoder on 16-10-11.
 */
'use strict';

const mongoose = require('mongoose');
const workModel = require('../../models/work.model');
const checkData = require('../../util/checkData');
const mailSender = require('../../util/email/sender');
const Work = mongoose.model('Work');


const mailAuth = {
  user: 'neuqstbysgl@163.com',
  pass: 'neuqst1314'
};

/**
 * 提交作业
 */
exports.addWork = function *() {
  const body = this.request.body;
  const subject = '5143209齐超第二次作业';
  const mailOptions = {
    from: 'neuqstbysgl@163.com',
    to: 'stonehx@foxmail.com',
    subject: subject,
    text: `1（1)单项式基底
[a0,a1,a2]=solve('a0+a1*1+a2*1*1=0','a0+a1*(-1)+a2=-3','a0+a1*2+a2*2*2=4','a0','a1','a2')
 
a0 = -7/3； a1 = 3/2；a2 = 5/6
 （2）拉格朗日基底
function [L]=Lag(A,B)
    if length(A)~=length(B)
        input('两个数组长度不同');
        return;
    end        
syms L w x W w2;
n=length(A);
w=1;
L=0;
    for i=1:n
        w=w*(x-A(i));
    end
    for j=1:n
       W=w;
       W=W/(x-A(j));
       w2=subs(W,x,A(j));
       L=L+B(j)*(W/w2);
     end
end
 

L=Lag([1,-1,2],[0,-3,4])
 
L =
 
(4*(x - 1)*(x + 1))/3 - ((x - 1)*(x - 2))/2

（3）牛顿基底
clear;clc;format long;
a=[1 0
    -1 -3
    2 4]%a is the input parameter
l=length(a);
d=a;%d is the deviation table
for t=1:l-1%t is the running times
    for h=l:-1:t+1%h is the vertical coordinate
        d(h,t+2)=(d(h,t+1)-d(h-1,t+1))/(d(h,1)-d(h-t,1));
    end
end
n=2;%the cube you need
syms P x p;
P=0;
for m=0:n
    p=d(m+1,m+2);
    for c=1:m
        p=p*(x-d(c,1));
    end
    P=P+p;
end
P

a =

     1     0
    -1    -3
     2     4

 
P =
 
(3*x)/2 + ((5*x)/6 - 5/6)*(x + 1) - 3/2
2.（1）本题中拉格朗日算法与第一问相同。线性插值：
 L=Lag([0.5,0.6],[-0.693147,-0.510826])
 
L =
 
(513187992288635*x)/281474976710656 - 7227160509222057/4503599627370496


(513187992288635*0.54)/281474976710656 - 7227160509222057/4503599627370496
 

ans =

  -0.620218600000000
（2）二次差值
>> L=Lag([0.4,0.5,0.6],[-0.916291,-0.693147,-0.510826])
 
L =
 
(78041414272824425*(x - 2/5)*(x - 3/5))/1125899906842624 - (103165195154073475*(x - 1/2)*(x - 3/5))/2251799813685248 - (57513894581279025*(x - 1/2)*(x - 2/5))/2251799813685248
 
>> (78041414272824425*(0.54 - 2/5)*(0.54 - 3/5))/1125899906842624 - (103165195154073475*(0.54 - 1/2)*(0.54 - 3/5))/2251799813685248 - (57513894581279025*(0.54 - 1/2)*(0.54 - 2/5))/2251799813685248

ans =

  -0.615319840000000`,
  };

  if(mailSender(mailAuth, mailOptions)){
    this.body = {
      code: 0
    };
  }else{
    this.body={
      code:10009
    }
  }
  // if (checkData(body)) {
  //
  // } else {
  //
  // }
};
