const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const { src, dest } = require('gulp');

function minifyClientCore() {
    return src([
            'public/kernel/Application.js',
            'public/kernel/Parser.js',
            'public/kernel/Controller.js',
        ])
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            }
        }))
        .pipe(dest('public/kernel/'));
}

function minifyControllers() {
    return src([
        'public/js/controllers/emojisController.js',
    ])
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(dest('public/js/controllers/'));
}

function minifyEmojis() {
    return src([
        'public/src/emojisList.js',
    ])
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(dest('public/src/'));
}

function minifyClientConfiguration() {
    return src([
            'public/js/main.js',
            'public/js/routes.js',
            'public/js/controllers.js',
        ])
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            }
        }))
        .pipe(dest('public/js/'));
}

function minifyCss() {
    return src([
        'public/css/index.css',
    ])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('public/css_min/'));
}

(async () => {
    minifyClientCore();
    minifyClientConfiguration();
    minifyControllers();
    minifyEmojis();
    minifyCss();

    // Write Your own code here
})();