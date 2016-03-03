// Dependencies
import config from './config';

import gulp from 'gulp';
import cached from 'gulp-cached';


export function base() {
    return gulp.src([
        config.paths.source.base + '/robots.txt',
        config.paths.source.base + '/.htaccess',
        config.paths.source.base + '/humans.txt',
        config.paths.source.base + '/sitemap.xml',
    ])
        .pipe(cached('copy:base')) // Pass through only files changed after the last run
        .pipe(gulp.dest(config.paths.build.base));
}

export function libraries() {
    return gulp.src(config.paths.source.base + '/assets/libraries/**/*')
        .pipe(cached('copy:libraries')) // Pass through only files changed after the last run
        .pipe(gulp.dest(config.paths.build.base + '/assets/libs'));
}
