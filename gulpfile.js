var gulp = require('gulp'),
  gutil = require('gulp-util');

require('load-common-gulp-tasks')(gulp);

gulp.task('develop', 'Watch and restart server on change', ['build', 'watch'], function () {
  var nodemon = require('gulp-nodemon');
  nodemon({ script: 'server.js', ext: 'html js', ignore: ['bower_components/*','node_modules/*'] })
    .on('change', ['ci-watch'])
    .on('restart', function () {
      var d = new Date();
      console.log(gutil.colors.bgBlue('server restarted at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()));
    });
});

gulp.task('bower-files', false, function () {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  return gulp.src(['./bower_components/**/*.js','./bower_components/**/*.css'], { base: './bower_components/' })
    .pipe(gulp.dest('./public'));
});

gulp.task('public', false, ['bower-files']);
gulp.task('build', 'Builds all static files', ['public']);