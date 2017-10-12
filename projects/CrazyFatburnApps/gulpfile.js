var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');



var scssSources = [
    './node_modules/normalize.css/normalize.css',
    // './node_modules/angularjs-slider/dist/rzslider.min.css',
    './node_modules/ng-dialog/css/ngDialog.min.css',
    './node_modules/ng-dialog/css/ngDialog-theme-default.min.css',
    './node_modules/n3-charts/build/LineChart.css',
    './node_modules/ng-scrollbar/dist/ng-scrollbar.min.css',
    './vendor/ng-scrollable-0.2.6/min/ng-scrollable.min.css',
    './node_modules/ng-img-crop-full-extended/compile/minified/ng-img-crop.css',
    './node_modules/ui-cropper/compile/minified/ui-cropper.css',
    // './node_modules/ng-audio/dist/css/ng-audio.min.css',
    './node_modules/angular-material/angular-material.min.css',
    './node_modules/simplebar/dist/simplebar.css',
    './node_modules/angular-carousel/dist/angular-carousel.min.css',
    './vendor/angular-image-crop/image-crop-styles.css',
    './scss/*.scss',
    './app/**/*.scss'
];

var jsSources = [
    './node_modules/angular/angular.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/@uirouter/angularjs/release/stateEvents.min.js',
    './node_modules/angular-sanitize/angular-sanitize.min.js',
    // './node_modules/angularjs-slider/dist/rzslider.min.js',
    // './node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js',
    // './node_modules/ng-file-upload/dist/ng-file-upload.min.js',
    './node_modules/ng-dialog/js/ngDialog.min.js',
    './node_modules/angular-elastic/elastic.js',
    './node_modules/angular-audio/app/angular.audio.js',
    './node_modules/n3-charts/build/LineChart.js',
    './node_modules/d3/d3.js',
    './node_modules/angular-animate/angular-animate.min.js',
    './node_modules/ng-scrollbar/dist/ng-scrollbar.min.js',
    './node_modules/ng-img-crop-full-extended/compile/minified/ng-img-crop.js',
    './node_modules/ui-cropper/compile/minified/ui-cropper.js',
    './node_modules/angular-file-upload/dist/angular-file-upload.min.js',
    './node_modules/angular-touch/angular-touch.min.js',    
    './node_modules/angular-aria/angular-aria.min.js',
    './node_modules/angular-material/angular-material.min.js',
    './node_modules/angular-messages/angular-messages.min.js',
    './node_modules/simplebar/dist/simplebar.js',
    './node_modules/angular-carousel/dist/angular-carousel.min.js',
    './vendor/angular-read-more/dist/readmore.min.js',
    './vendor/angular-image-crop/image-crop.js',
    // './node_modules/satellizer/dist/satellizer.min.js',
    './node_modules/angular-scroll/angular-scroll.min.js',
    './node_modules/ng-content-editable/src/content-editable.js',
    // './node_modules/ng-disable-scroll/disable-scroll.min.js',
    // './node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js',
    './app/app.module.js',
    './app/**/*js'
];



gulp.task('sass', function() {
    return gulp.src(scssSources)
        .pipe(concat("style.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/assets/css/'));
});

// gulp.task('sass-min', function () {
//     return gulp.src(['./assets/css/scss/_variables.scss', './assets/css/scss/_mixin.scss',  './assets/css/scss/style.scss', './app/**/*.scss', '!./node_modules/**/*.scss'])
//         .pipe(concat("style.min.css"))
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(autoprefixer({
//             browsers: ['last 16 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./assets/css/'));
// });


gulp.task('build', function() {
    return gulp.src(jsSources)
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./public/app'));
});

// gulp.task('compress', function () {
//     return gulp.src(['./app/**/*.module.js', './app/**/*.js', '!./app/build.min.js', '!./app/build.js'])
//         .pipe(concat('build.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./app/'));
// });

gulp.task('template', function() {
    return gulp.src(['./app/**/*.html'], { base: "./app" })
        .pipe(gulp.dest('./public/app/'));
});

gulp.task('watch', function() {
    gulp.watch(scssSources, ['sass']);
    gulp.watch(jsSources, ['build']);
    gulp.watch(['./app/**/*.html'], ['template']);
});


gulp.task('default', ['sass', 'build', 'template', 'watch']);