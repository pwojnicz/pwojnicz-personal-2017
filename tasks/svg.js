'use strict'

import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import { dirs } from './config'

const svgPaths = {
  src: `${dirs.src}/images`,
  dest: `${dirs.dest}/assets/img`
}

const config = {
  shape: {
    dest: '.'
  },
  mode: {
    symbol: {
      dest: '.',
      sprite: 'sprite.svg',
      example: true
    }
  }
}

export function svg() {
  return gulp.src('**/*.svg', { cwd: svgPaths.src })
    .pipe(svgSprite(config))
    .pipe(gulp.dest(svgPaths.dest))
}
