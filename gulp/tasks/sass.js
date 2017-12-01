var sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
gulp = require('gulp');


gulp.task('sass', function () {
gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        grid: true,
        cascade: false
    }))
    .pipe(gulp.dest('assets/css/'))
});