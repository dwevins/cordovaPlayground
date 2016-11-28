var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');


gulp.task('styles', function() {
    gulp.src('www/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('www/css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('www/css/index.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('www/css/min.css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('www/sass/*.scss',['styles']);
    gulp.watch('www/css/index.css', ['minify-css']);
});
