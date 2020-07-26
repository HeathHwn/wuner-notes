# ESLint 与 Gulp 结合

## 安装

```
npm i eslint gulp-eslint -D
```

## 用法

```javascript
const bs = require('browser-sync').create(); // https://browsersync.io/docs/gulp
const path = require('path');

const { src, dest, series, parallel, watch } = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const plugins = loadPlugins();
// const sass = require('gulp-sass')
// const cleanCss = require('gulp-clean-css')
// const babel = require('gulp-babel')
// const uglify = require('gulp-uglify')
// const rename = require('gulp-rename')
// const swig = require('gulp-swig')
// const htmlmin = require('gulp-htmlmin')
// const imagemin = require('gulp-imagemin')

const cwd = process.cwd();

const config = {
  // 默认配置
  build: {
    src: 'src',
    temp: 'temp',
    dist: 'dist',
    public: 'public',
    paths: {
      styles: 'assets/styles/*.scss',
      fonts: 'assets/fonts/**',
      images: 'assets/images/**',
      pages: '*.html',
      scripts: 'assets/scripts/*.js',
    },
  },
};

try {
  const loadConfig = require(path.join(cwd, 'pages.config.js'));
  Object.assign(config, loadConfig);
} catch (e) {
  // 当没有加载到pages.config.js时，这里可以处理
}

const del = require('del');

const style = () => {
  return (
    src(config.build.paths.styles, {
      base: config.build.src,
      cwd: config.build.src,
    })
      .pipe(plugins.sass({ outputStyle: 'expanded' }))
      // .pipe(plugins.cleanCss())
      // .pipe(plugins.rename({extname: '.min.css'}))
      .pipe(dest(config.build.temp))
  );
};

const script = () => {
  return (
    src(config.build.paths.scripts, {
      base: config.build.src,
      cwd: config.build.src,
    })
      // eslint校验
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError())
      .pipe(plugins.babel({ presets: [require('@babel/preset-env')] }))
      // .pipe(plugins.uglify())
      // .pipe(plugins.rename({extname: '.min.js'}))
      .pipe(dest(config.build.temp))
  );
};

const page = () => {
  return (
    src(config.build.paths.pages, {
      base: config.build.src,
      cwd: config.build.src,
    })
      .pipe(plugins.swig({ data: config.data, defaults: { cache: false } }))
      // .pipe(plugins.htmlmin({ conservativeCollapse: true, collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
      .pipe(dest(config.build.temp))
  );
};

const image = () => {
  return src(config.build.paths.images, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.imagemin())
    .pipe(dest(config.build.dist));
};

const font = () => {
  return src(config.build.paths.fonts, {
    base: config.build.src,
    cwd: config.build.src,
  })
    .pipe(plugins.imagemin())
    .pipe(dest(config.build.dist));
};

const extra = () => {
  return src('**', {
    base: config.build.public,
    cwd: config.build.public,
  }).pipe(dest(config.build.dist));
};

const clean = () => {
  return del([config.build.dist, config.build.temp]);
};

const serve = () => {
  watch(config.build.paths.styles, { cwd: config.build.src }, style);
  watch(config.build.paths.scripts, { cwd: config.build.src }, script);
  watch(config.build.paths.pages, { cwd: config.build.src }, page);
  watch(
    [
      path.join(config.build.src, config.build.paths.images),
      path.join(config.build.src, config.build.paths.fonts),
      path.join(config.build.public, '**'),
    ],
    bs.reload,
  );

  bs.init({
    notify: false,
    open: false,
    files: [config.build.dist, config.build.src, config.build.public],
    server: {
      baseDir: [config.build.temp, config.build.src, config.build.public],
      routes: { '/node_modules': 'node_modules' },
    },
  });
};

const useref = () => {
  return (
    src(config.build.paths.pages, {
      base: config.build.temp,
      cwd: config.build.temp,
    })
      .pipe(plugins.useref({ searchPath: [config.build.temp, '.'] }))
      // html js css三种流
      .pipe(plugins.if(/\.js$/, plugins.uglify()))
      .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
      .pipe(
        plugins.if(
          /\.html$/,
          plugins.htmlmin({
            conservativeCollapse: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          }),
        ),
      )
      .pipe(dest(config.build.dist))
  );
};

const compile = parallel(style, script, page);

const build = series(
  clean,
  parallel(series(compile, useref), image, font, extra),
);

const dev = series(clean, compile, serve);

module.exports = {
  build,
  dev,
  clean,
  script,
};
```
