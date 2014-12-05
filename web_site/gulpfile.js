'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['style'], function () {
  gulp.watch('./style/**/*.scss', ['style']);

  return browserSync({
    server: {
      baseDir: './dist/',
    }
  });
}); 

gulp.task('style', function () {
  return gulp.src('./style/main.scss')
    .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({stream: true}));
});
