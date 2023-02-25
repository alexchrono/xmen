var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');







 gulp.task('trim-css', function() {
return gulp.src('/src/css/css.css','availability.css','unit.css')
        .pipe(uncss({
            html: ['index.html', 'availability.html', 'unit.html']
        }))
        .pipe(gulp.dest('/dist/css/'));})

//this takes away all spaces from css files
gulp.task('minify-css', function () {
    return gulp.src('/src/css/css.css','availability.css','unit.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/'));
  });

//this minifies javascript
gulp.task('compress', function () {
    return pipeline(
          gulp.src('lib/*.js'),
          uglify(),
          gulp.dest('./dist/')
    );
  });



//this concatenates all js files into one
gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('run', ['trim-css', 'minify-css', 'compress', 'scripts'] )
//   //this will help catch breaks in system before they happen
//   var plumber = require('gulp-plumber');
// var coffee = require('gulp-coffee');

// gulp.src('./src/*.ext')
// 	.pipe(plumber())
// 	.pipe(coffee())
// 	.pipe(gulp.dest('./dist'));

//This ensures browser compatibility
// exports.default = () => (
// 	gulp.src('src/app.css')
// 		.pipe(autoprefixer({
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('dist'))
// );
