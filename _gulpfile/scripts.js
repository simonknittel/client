// Dependencies
import config from './config';

import {execSync} from 'child_process';
import fs from 'fs';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gulpIf from 'gulp-if';


function bundle(parameters = '') {
    const files = fs.readdirSync(config.paths.source.scripts);

    for (let i = 0; i < files.length; i++) {
        if (files[i].indexOf('.js', files[i].length - '.js'.length) !== -1) {
            const file = files[i].slice(0, -3);

            execSync('jspm bundle-sfx ' + config.paths.source.scripts + '/' + file + ' ' + config.paths.build.scripts + '/' + file + '.js' + parameters);
        }
    }

    return;
}

function isFixed(file) {
    // Has ESLint fixed the file contents?
    return file.eslint != null && file.eslint.fixed;
}

export function dev(callback) {
    bundle();
    return callback();
}

export function prod(callback) {
    bundle(' --minify --skip-source-maps');
    return callback();
}

// https://github.com/adametry/gulp-eslint/blob/master/example/fix.js
export function fix() {
    return gulp.src(config.paths.source.scripts + '/**/*.js')
        .pipe(eslint({
            fix: true,
        }))
        .pipe(gulpIf(isFixed, gulp.dest(config.paths.source.scripts)));
}

export function lint() {
    return gulp.src(config.paths.source.scripts + '/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
}
