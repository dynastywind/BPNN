var gulp = require('gulp');
var del = require('del');
var jade = require('gulp-jade');

gulp.task('clean', () => {
	return del('./build');
});

gulp.task('copy', ['clean'], () => {
	return gulp.src(['src/img/**/*','src/css/**/*','src/js/**/*'], {base: 'src'})
		.pipe(gulp.dest('build'));
});

gulp.task('jade', ['copy'], () => {
	return gulp.src('src/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build'));
});

gulp.task('default', ['jade']);
