var gulp = require('gulp'),
  gutil = require('gulp-util'),
  changed = require('gulp-changed');

require('load-common-gulp-tasks')(gulp);

gulp.task('develop', 'Watch and restart server on change', ['build', 'watch'], function () {
  var nodemon = require('gulp-nodemon');
  nodemon({ script: 'server.js', ext: 'html js', ignore: ['bower_components/*','node_modules/*','content/*','public/*'] })
    .on('change', ['ci-watch'])
    .on('restart', function () {
      var d = new Date();
      console.log(gutil.colors.bgBlue('server restarted at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()));
    });
});

gulp.task('clean', 'Clean all built resources', function () {
  var clean = require('gulp-clean');
  return gulp.src(['./public/*'], {read: false})
    .pipe(clean());
});

gulp.task('bower-files', false, function () {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  return gulp.src(['./bower_components/**/*.js','./bower_components/**/*.css'], { base: './bower_components/' })
    .pipe(changed('./public'))
    .pipe(gulp.dest('./public'));
});

gulp.task('content-files', false, function () {
  var concat = require('gulp-concat');
  return gulp.src(['./content/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', 'Watch for file system changes and, where appropriate, restart the server or reload static resources', function () {
  var livereload = require('gulp-livereload'),
    server = livereload();
  gulp.watch(['./content/**/*.*'], ['build']);
  gulp.watch(['./public/**/*.*','./views/**/*.*']).on('change', function (file) {
    server.changed(file.path);
  });
});

gulp.task('public', false, ['bower-files', 'content-files']);
gulp.task('build', 'Builds all static files', ['public']);