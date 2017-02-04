var gulp = require('gulp');
var del = require('del');
var jade = require('gulp-jade');

gulp.task('clean', () => {
	del('./build');
});

gulp.task('copy', ['clean'], (done) => {
	gulp.src(['src/img/**/*'], {base: 'src'})
		.pipe(gulp.dest('build'));
	gulp.src(['src/css/**/*'], {base: 'src'})
		.pipe(gulp.dest('build'));
	gulp.src(['src/js/**/*'], {base: 'src'})
		.pipe(gulp.dest('build'));
	done();
});

gulp.task('jade', ['copy'], (done) => {
	gulp.src('src/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('build'));
	done();
});

gulp.task('default', ['jade']);
