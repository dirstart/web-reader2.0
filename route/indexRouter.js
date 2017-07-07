let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
	res.setHeader('Cache-Control','no-cache,no-store,must-revalidate');
	res.setHeader('pragma','no-cache');
	res.setHeader('Expires','0');
	res.send('hello,world');
});

router.get('/test',(req,res)=>{
	res.render('test',{name:'hahah'});
});

module.exports=router;