var gulp = require('gulp');

gulp.task('default', ['build'], function() {
	gulp.watch("assets/sass/**/*", ['sass']);
});