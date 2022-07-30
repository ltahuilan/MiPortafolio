//variables
const {gulp, src, watch, dest, parallel} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');
const notify = require('gulp-notify');
const concat = require('gulp-concat');


//utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemap = require('gulp-sourcemaps');


//utilidades js
const terser = require('gulp-terser');

//paths
const paths = {
    scss: 'src/scss/**/*.scss',
    img: 'src/img/**/*',
    js: 'src/js/**/*.js'
}

//funciones
function css() {
    return src(paths.scss)
    // .pipe( sourcemap.init() )
    // .pipe( notify({message: 'Luis: map of scss <%= file.relative %> success'}) )
    .pipe( scss())
    // .pipe( notify({message: 'Luis: SCSS file <%= file.relative %> compile to CSS success...'}) )
    // .pipe( postcss([autoprefixer(), cssnano()]) )
    // .pipe( sourcemap.write('.') )
    .pipe( dest('./build/css') )
}

function convertWebp() {
    return src(paths.img)
    .pipe( webp() )
    .pipe( notify({message: 'Luis: Image <%= file.relative %> convert to webp success...'}) )
    .pipe( dest('./build/img') )
}

function javascript () {
    return src(paths.js)
    .pipe( sourcemap.init())
    .pipe( concat('bundle.js') )
    // .pipe( notify({message: 'Luis: Compile JS file <%= file.relative %> success...'}) )
    .pipe( terser() )
    .pipe( sourcemap.write('.'))
    .pipe( dest('./build/js'))
}

function watchFiles() {
    watch( paths.scss, css );
    watch( paths.js, javascript )

}

exports.css = css;
exports.default = parallel( watchFiles, css, convertWebp, javascript );