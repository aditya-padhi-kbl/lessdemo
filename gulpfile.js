const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');
const gulpless = require('gulp-less');
const del = require('del');
const cssFiles = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'app/lessbuff/**/*.css'
];


/* gulp.task('minify-css', () => {
    
}); */

function minifyCSS() {
    return gulp.src(cssFiles)
        .pipe(concatCss('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
}

function compileLess() {
    return gulp.src('app/less/**/*.less')
        .pipe(gulpless())
        .pipe(gulp.dest('app/lessbuff'));
}

function copyIcons() {
    return gulp.src('node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('font-awesome/fonts'));
}


function clean() {
    return del(['app/lessbuff']);
}

gulp.task('default', gulp.series(compileLess, minifyCSS, copyIcons, clean));