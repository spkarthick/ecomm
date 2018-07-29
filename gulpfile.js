var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var removeCode = require('gulp-remove-code');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var argv = require('yargs').argv;
var openUrl = require('open');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

// define tasks here
gulp.task('component', function() {
    gulp.src(["./generator/name/name.js","./generator/name/name.css","./generator/name/name.component.js","./generator/name/name.controller.js","./generator/name/name.service.js","./generator/name/name.html"])
		.pipe(replace(/{{name}}/g, argv.name))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace(/name/g, argv.name);
		}))
        .pipe(gulp.dest('./components/' + argv.name));
});

gulp.task('compress', function () {
    gulp.src(['lib/jquery/dist/jquery.min.js',
        'lib/bootstrap/dist/js/bootstrap.min.js',
        'lib/angular/angular.min.js',
        'lib/angular-sanitize/angular-sanitize.min.js',
        'lib/angular-animate/angular-animate.min.js',
        'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'lib/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/angular-lazy-img/dist/angular-lazy-img.min.js',
        'components/header/header.js',
        'components/header/header.controller.js',
        'components/header/header.service.js',
        'components/header/header.component.js',
        'components/footer/footer.js',
        'components/footer/footer.controller.js',
        'components/footer/footer.service.js',
        'components/footer/footer.component.js',
        'components/shop/shop.js',
        'components/shop/shop.controller.js',
        'components/shop/shop.service.js',
        'components/shop/shop.component.js',
        'components/custom/custom.js',
        'components/custom/custom.controller.js',
        'components/custom/custom.service.js',
        'components/custom/custom.component.js',
        'components/productDetails/productDetails.js',
        'components/productDetails/productDetails.controller.js',
        'components/productDetails/productDetails.service.js',
        'components/productDetails/productDetails.component.js',
        'components/contact/contact.js',
        'components/contact/contact.controller.js',
        'components/contact/contact.service.js',
        'components/contact/contact.component.js',
        'components/cart/cart.js',
        'components/cart/cart.controller.js',
        'components/cart/cart.service.js',
        'components/cart/cart.component.js',
        'components/checkout/checkout.js',
        'components/checkout/checkout.controller.js',
        'components/checkout/checkout.service.js',
        'components/checkout/checkout.component.js',
        'components/track/track.js',
        'components/track/track.controller.js',
        'components/track/track.service.js',
        'components/track/track.component.js',
        'components/doc/doc.js',
        'components/doc/doc.controller.js',
        'components/doc/doc.service.js',
        'components/doc/doc.component.js',
        'components/confirmation/confirmation.js',
        'components/confirmation/confirmation.controller.js',
        'components/confirmation/confirmation.service.js',
        'components/confirmation/confirmation.component.js',
        'app.js',
        'common/app.directives.js',
        'common/api.config.js'
    ]).pipe(concat('all.js'))
      .pipe(minify({
          ext: {
              src: '.js',
              min: '.min.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js']
      }))
      .pipe(gulp.dest('dist/scripts'));
    gulp.src(['lib/bootstrap/dist/css/bootstrap.min.css',
        'lib/font-awesome/css/font-awesome.css',
        'lib/angular-animate-css/build/nga.all.min.css',
        'app.css',
        'components/header/header.css',
        'components/footer/footer.css',
        'components/custom/custom.css',
        'components/productDetails/productDetails.css',
        'components/shop/shop.css',
        'components/contact/contact.css',
        'components/cart/cart.css',
        'components/checkout/checkout.css',
        'components/track/track.css',
        'components/doc/doc.css',
        'components/confirmation/confirmation.css'
    ]).pipe(concat('all.min.css'))
      .pipe(gulp.dest('dist/css'));
    gulp.src(['lib/font-awesome/fonts/*','lib/bootstrap/dist/fonts/*'])
        .pipe(gulp.dest('dist/fonts'));
});
gulp.task('run', function () {
    connect.server({
        root: ["."],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9000
    });
    watch(['./components/**/*', './common/**/*']).pipe(connect.reload());
    openUrl("http://localhost:9000");
});
gulp.task('serve', ["compress","run"]);