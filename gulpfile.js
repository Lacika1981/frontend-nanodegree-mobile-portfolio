var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var uncss = require('gulp-uncss');
 

 // js compressor
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('js/dist')
    ],
    cb
  );
});

// css compressor
gulp.task('css', function () {
  gulp.src('./css/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});

// html compressor
gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

//remove unused CSS
gulp.task('default', function () {
    return gulp.src('./css/**/*.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./dist/'));
});
