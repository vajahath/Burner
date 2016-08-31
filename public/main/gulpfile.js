const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const uglifyJS = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const runsequence = require('run-sequence');
const imagemin = require('gulp-imagemin');
const uncss = require('gulp-uncss');

// setting variables for src
// html
const src_main_html = '*.html';
const src_templates_html = 'templates/*.html';
const src_polymer = 'bower_components/polymer/*.html';
//css
const src_css = 'styles/*.css';
// js
const src_main_js = 'js/*.js';
const src_webcomp_js = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
// img
const src_img = 'images/*';

// dest location
const dest_main_html = 'build/';
const dest_templates_html = 'build/templates/';
const dest_polymer = 'build/bower_components/polymer/';
//css
const dest_css = 'build/styles/';
// js
const dest_main_js = 'build/js/';
const dest_webcomp_js = 'build/bower_components/webcomponentsjs/';
// img
const dest_img = 'build/images/';


gulp.task('default', function() {
	return gutil.log("lets melt things down...");
});

gulp.task('build', function() {
	//////////
	// html //
	//////////
	gutil.log("MELTING src_main_html FILES");
	gulp.src(src_main_html)
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			removeAttributeQuotes: true,
			removeRedundantAttributes: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeOptionalTags: true
		}))
		.pipe(gulp.dest(dest_main_html));

	gutil.log("MELTING src_templates_html FILES");
	gulp.src(src_templates_html)
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			removeAttributeQuotes: true,
			removeRedundantAttributes: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeOptionalTags: true
		}))
		.pipe(gulp.dest(dest_templates_html));

	gutil.log("MELTING src_polymer FILES");
	gulp.src(src_polymer)
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			removeAttributeQuotes: true,
			removeRedundantAttributes: true,
			removeEmptyAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeOptionalTags: true
		}))
		.pipe(gulp.dest(dest_polymer));

	/////////
	// css //
	/////////
	gutil.log("MELTING src_css FILES");
	gulp.src(src_css)
		.pipe(concatCss("style.css"))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest(dest_css));

	////////
	// js //
	////////
	gutil.log("MELTING src_main_js FILES");
	gulp.src(src_main_js)
		.pipe(uglifyJS())
		.pipe(gulp.dest(dest_main_js));

	gutil.log("MELTING src_webcomp_js FILES");
	gulp.src(src_webcomp_js)
		.pipe(uglifyJS())
		.pipe(gulp.dest(dest_webcomp_js));

	/////////
	// img //
	/////////
	gulp.src(src_img)
		.pipe(imagemin())
		.pipe(gulp.dest(dest_img));
});
