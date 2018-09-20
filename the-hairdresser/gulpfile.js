const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const config = {
	paths: {
		normalize:
			'./node_modules/css-reset-and-normalize/scss/reset-and-normalize.scss',
		scss: './src/scss/**/*.scss',
		html: './index.html'
	},
	output: {
		cssName: 'bundle.min.css',
		cssPath: './css',
		jsPath: './js',
		htmlPath: './'
	}
};

gulp.task('scss', done => {
	gulp
		.src([config.paths.scss])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(concat(config.output.cssName))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		// .pipe(cleanCss())
		.pipe(gulp.dest(config.output.cssPath))
		.pipe(browserSync.stream());
	done();
});

gulp.task('serve', done => {
	browserSync.init({
		server: {
			baseDir: config.output.htmlPath
		}
	});
	gulp.watch(config.paths.scss, gulp.parallel('scss'));
	gulp.watch(config.paths.html).on('change', browserSync.reload);
	done();
});

gulp.task('default', gulp.parallel('scss', 'serve'));
