let gulp=require('gulp'),
	nodemon=require('gulp-nodemon'),
	browser=require('browser-sync');

let reload=browser.reload;

gulp.task('serve',function(){
	browser.init({
		proxy:'http://localhost:3000',
		notify:false,
		port:3001
	});
	let hot_files=['./views/*.html','./views/pages/*.html','./views/include/*.html'];
	gulp.watch(hot_files).on('change',reload);
});
gulp.task('node_app',function(){
	nodemon({
		script:'app.js',
		ext:'js html',
		env:{'NODE_ENV':'development'}
	});
});
gulp.task('default',['node_app','serve']);