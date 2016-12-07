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
    .pipe(gulp.dest('dist'))
})

gulp.task('build', ['minifyHTML', 'minifyCSS'])
gulp.task('default', ['build'])
