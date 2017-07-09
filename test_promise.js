// var promise=new Promise((resolve)=>{
// 	console.log("inner promise");
// 	resolve(42);
// });

// promise.then(function(value){
// 	console.log(value);
// });

// console.log("outer promise");


function print(){
	console.log(check);
}
function people(callback){
	this.age=0;
	this.money=0;
	setTimeout(function(){
		this.check=3;
		console.log(check); // 3
		callback();
	},1000);
};
people(print);

setTimeout(function(){
	console.log(global.check);
},500);
setTimeout(function(){
	console.log(global.check);//3
	console.log(this.check);//3
},2000);