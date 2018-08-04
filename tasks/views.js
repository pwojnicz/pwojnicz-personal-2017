'use strict'

import gulp from 'gulp'
import pug from 'gulp-pug'
import plumber from 'gulp-plumber'
import { dirs } from './config'

export function views() {
  return gulp.src([`${dirs.src}/views/**/[^_]*.pug`])
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(dirs.dest))
}
