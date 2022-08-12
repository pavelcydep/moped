const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

 
gulp.task('server', function() {
 
    browserSync({
        server: {
            baseDir: "/"
        }
    });
 
    gulp.watch("assets/sass/**/*.+(scss|sass)").on('change', browserSync.reload);
});
 
gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"));
        
});
 
gulp.task('watch', function() {
    gulp.watch("assets/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});
 
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));