//variables
const {gulp, src, watch, dest, parallel} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');
const notify = require('gulp-notify');


//utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemap = require('gulp-sourcemaps');

//paths
const paths = {
    scss: 'src/scss/**/*.scss',
    img: 'src/img/*'
}

//funciones
function css() {
    return src(paths.scss)
    // .pipe( sourcemap.init() )
    // .pipe( notify({message: 'Luis: map of scss success'}) )
    .pipe( scss())
    .pipe( notify({message: 'Luis: SCSS compile to CSS success...'}) )
    // .pipe( postcss([autoprefixer(), cssnano()]) )
    // .pipe( sourcemap.write('.') )
    .pipe( dest('./build/css') )
}

function convertWebp() {
    return src(paths.img)
    .pipe(webp())
    .pipe(notify({message: 'Luis: Image convert to webp success...'}))
    .pipe(dest('./build/img'))
}

function watchFiles() {
    watch(paths.scss, css);

}

exports.css = css;
exports.default = parallel( watchFiles, css, convertWebp );