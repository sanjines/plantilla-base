//JavaScript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'
import pug from 'gulp-pug'
// import sass from 'gulp-dart-sass'


import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);


import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import plumber from 'gulp-plumber'

// Clean css
import clean from 'gulp-purgecss'

import cacheBust from 'gulp-cache-bust'

import browserSync, {
  init as server,
  stream,
  reload
} from 'browser-sync'

// Variables para gulp-postcss y autoprefixer

const cssPlugins = [
  autoprefixer()
]



gulp.task('babel', () => {
  return gulp
    .src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // tercer minifica el js de salida
    // .pipe(terser())
    .pipe(gulp.dest('./public/js'))
})


const production = false;
gulp.task('views', () => {
  return gulp.src('./src/views/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      // pretty minifica el html de salida
      pretty: production ? false : true
    }))

    .pipe(cacheBust({
      type: 'timestamp'
    }))
    .pipe(gulp.dest('./public'))
})


gulp.task('sass', () => {
  // return gulp.src('./src/scss/**/*.scss')
  // return gulp.src('./sass/**/*.scss')
  return gulp.src('./src/scss/style.scss')
    .pipe(stream())
    .pipe(plumber())
    .pipe(sass({
      // el valor expanded minifica el css de salida
      outputStyle: 'expanded'
    }).on('error', sass.logError))

    // .pipe(postcss([autoprefixer]))
    // LA EXPRESION A CONTINUACION ES LA OFICIAL PARA PREFIJOS PROPIETARIOS
    // .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('./public/css'))
});


// gulp clean limpia el codigo que no se utiliza en scss
gulp.task('clean', () => {
  return gulp.src('./public/css/style.css')
    .pipe(plumber())
    .pipe(clean({
      content: ['./public/*.html']
    }))
    .pipe(gulp.dest('./public/css'))
})


gulp.task('default', () => {
  server({
    server: './public',
  })

  gulp.watch('./src/views/**/*.pug', gulp.series('views')).on('change', reload)
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('src/js/*.js', gulp.series('babel')).on('change', reload)
})