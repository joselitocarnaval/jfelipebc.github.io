'use strict';
var   gulp 			 	 = require('gulp'),
	  connect			 = require('gulp-connect'),
	  stylus			 = require('gulp-stylus'),
	  nib				 = require('nib'),
	  inject			 = require('gulp-inject'), 
	  wiredep			 = require('wiredep').stream,
	  historyApiFallback = require('connect-history-api-fallback');

gulp.task('webserver', function(){
	connect.server({
		root: 'public/',
		port:9999, 
		livereload: true,
		middleware: function(connect, opt){
			return [ historyApiFallback ];
		}
	});
})


//Inject the files created 
gulp.task('inject', function(){
	var sources = gulp.src('public/assets/css/*.css');
	return gulp.src('index.html', { cwd: 'public'})
		   .pipe(inject(sources, {read: false,ignorePath: '/public'}))
		   .pipe(gulp.dest('public'));
});

//Inject files installed by bower 
gulp.task('wiredep', function(){
	gulp.src('public/index.html').pipe(wiredep({directory: 'public/lib'}))
		.pipe(gulp.dest('public'));
});

gulp.task('css', function(){
 	gulp.src(['public/assets/stylus/main.styl','public/assets/css/vertical-timeline.css'])
 		.pipe(stylus({ use: nib()}))
 		.pipe(gulp.dest('public/assets/css'))
		.pipe(connect.reload());
})

//HTML
gulp.task('html', function(){
		gulp.src('public/**/*.html')
				.pipe(connect.reload());
});

//watch changes and launches a task
gulp.task('watch', function(){
	gulp.watch(['public/**/*.html'], ['html']);
	gulp.watch(['public/assets/**/*.styl', 'public/assets/css/vertical-timeline.css'], ['css', 'inject']);
	gulp.watch(['public/scripts/*.js', 'Gulpfile.js'], ['inject']);
	gulp.watch(['bower.json'], ['wiredep']);

});

gulp.task('default', ['webserver','watch', 'inject','wiredep'])

