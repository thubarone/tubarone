var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// task para o sass
gulp.task('sass', function(){
  return sass('sass/*.sass').pipe(gulp.dest('css'))
});
// task defatul gulp
gulp.task('default', function(){
  console.log('Olá Coders!');
});
