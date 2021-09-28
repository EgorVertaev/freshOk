const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const del = require('del');
const fileinclude = require('gulp-file-include');
const sprite = require('gulp-svg-sprite'),
      cheerio = require('gulp-cheerio'),
	  replace = require('gulp-replace');


function browser() {
    browserSync.init ({
        server: {
            baseDir: 'build/'
        },
        notify: false 
    })
}

function styles() {
    return src('app/scss/style.scss') 
    .pipe(scss({outputStyle:'compressed' })) 
    .pipe(concat('style.min.css')) 
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'], 
        grid: true
    }))
    .pipe(dest('./build/css')) 
    
    .pipe(browserSync.stream())
}   

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
        'node_modules/@fancyapps/ui/dist/fancybox.umd.js',
        'node_modules/@fancyapps/ui/dist/carousel.umd.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}

function fonts() {
    return src('app/fonts/*')
        .pipe(dest('build/fonts'))
}

function img() {
    return src('app/images/content/**/*')
    .pipe(dest('build/images/content'))
}

function svgSprite() {
    return src('app/images/sprite/*.svg')

    .pipe(cheerio({
        run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(sprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('./build/images'))
}
function html() {
    return src(['app/*.html', '!app/parts/**/*.html'])
    .pipe(fileinclude({
        profix: '@@',
        basepath: '@file'       
    }))
    .pipe(dest('./build'))
    .pipe(browserSync.stream())
};

function images() {
    return src('app/images/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true}),
        imagemin.mozjpeg({ quality: 75, progressive: true}),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
            plugins: [
                { removeViewBox: true},
                { cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('build/images'))
}

function build() {
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js'
    ], {base: 'app'})
    .pipe(dest('build'))
}

function cleanBuild() {
    return del('build')
}

function watching() { 
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html'], html)
    watch('app/images/content/*', parallel('images'));
    watch('app/images/sprite/*', parallel('svgSprite'));
    watch('app/fonts/*', parallel('fonts'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.browser = browser;
exports.watching = watching;
exports.images = images;
exports.cleanBuild = cleanBuild;
exports.svgSprite = svgSprite;
exports.html = html;
exports.img = img;
exports.fonts = fonts;

exports.build = series(cleanBuild, images, build);
exports.default = series(parallel(styles, scripts, fonts, img, html, images, svgSprite), parallel(browser, watching));

