/**
 * Created by qoder on 16-10-11.
 */
const router=require('koa-router')();
const controller=require('./email.controller');
const checkToken=require('../../util/token/checkToken');

router.use(checkToken);
router.post('/',controller.addEmail);

module.exports=router;
