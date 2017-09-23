var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync').create();
// sass compiler
var sass = require('gulp-sass');

// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

// error handling
var plumber = require('gulp-plumber');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist",
      index: "index.html"
    }
  });
});

gulp.task('scss', function() {
  gulp.src('./src/scss/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// src 配下の *.html, *.css ファイルが変更されたリロード。
gulp.task('scss-watch', ['scss','browser-sync'], function(){
  let watcher = gulp.watch('./src/**/*.scss', ['scss']);
  gulp.watch("./dist/*.html",['bs-reload']);
  watcher.on('change', function(event) {
    console.log('コンパイルOK!');
  });
  gulp.watch("./dist/css/main.css",['bs-reload']);
  gulp.watch("./src/js/**/*.js",['bs-reload']);
});

gulp.task('default', ['scss-watch','browser-sync']);
// gulp.task('build',['minify-css','minify-js']);
