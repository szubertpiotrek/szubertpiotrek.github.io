// var gulp = require('gulp');
// var scss = require('gulp-scss');
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('scss', function() {
//     gulp.src('scss/**/*.scss')                 // bierze wszsytkie pliki scss
//         .pipe(scss({                           //przerabia pliki scss
//             outputStyle: "compressed"          //kompensuje css
//         }))
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))                                    //dodaje autoprefixy
//         .pipe(sourcemaps.write())              //dodaje mapowanie scss w css
//         .pipe(gulp.dest('css'));               // przerabia scss na css
// });
//
// gulp.task('watch', function() {                // stale odswiezanie i wczytywanie zmian scss w css
//     gulp.watch('scss/**/*.scss', ['scss'])
// });
//
// gulp.task('default', ['scss', 'watch']);


var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass'])
});
gulp.task('default', ['sass', 'watch']);


