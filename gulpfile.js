var gulp         = require('gulp');
var concat       = require('gulp-concat');
var sass         = require('gulp-sass');
var tinypng      = require('gulp-tinypng-compress');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var ngmin        = require('gulp-ngmin');
  
  gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 16 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('css'));
  });
  

  gulp.task('html', function(){
    gulp.src('*.html');
  });
  
  
  gulp.task('scripts', function(){
    return gulp.src(paths.script)
      .pipe(gulp.dest('./js/'));
  });

  gulp.task('css-min', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
  });

  gulp.task('js-min', function () {
    return gulp.src('js/main.js') //return gulp.src('app/js/**/*.js')
        .pipe(concat('main.min.js')) //.pipe(concat('build.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
  });
  
  gulp.task('watch', ['sass'], function (){
    gulp.watch('scss/**/*.scss', ['sass']); 

    gulp.watch('scss/**/*.scss', ['css-min']); 
    gulp.watch('js/main.js', ['js-min']); 
  })

gulp.task('build', ['css-min', 'js-min']);

gulp.task('default', ['watch']);