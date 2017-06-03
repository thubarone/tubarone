'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// task para o sass
gulp.task('sass', function(){
  return gulp.src('sass/**/*.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'));
});

// task defatul gulp
gulp.task('sass:watch', function(){
  gulp.watch('sass/**/*.sass',['sass']);

});
