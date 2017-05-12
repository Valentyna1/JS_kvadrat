const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task ('babel', function () {
    return gulp.src('src/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task ('watch', ['babel'], function () {
    gulp.watch('src/main.js', ['babel']);
});