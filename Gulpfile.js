var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var cleanCSS = require('gulp-clean-css')

gulp.task('minifyHTML', function () {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})

gulp.task('minifyCSS', function () {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function () {
  return gulp.src('public/js/*.js')
    .pipe(gulp.dest('dist/js'))
})

gulp.task('build', ['minifyHTML', 'minifyCSS', 'js'])
gulp.task('default', ['build'])
