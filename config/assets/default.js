'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/admin-lte/bootstrap/css/bootstrap.min.css',
        'public/lib/admin-lte/plugins/timepicker/bootstrap-timepicker.min.css',
        'public/lib/admin-lte/plugins/colorpicker/bootstrap-colorpicker.min.css',
        'public/lib/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
        'public/lib/admin-lte/plugins/datepicker/datepicker3.css',
        'public/lib/admin-lte/plugins/daterangepicker/daterangepicker-bs3.css',
        'public/lib/admin-lte/plugins/morris/morris.css',
        'public/lib/admin-lte/plugins/select2/select2.min.css',
        'public/lib/admin-lte/dist/css/AdminLTE.min.css',
        'public/lib/admin-lte/dist/css/skins/_all-skins.min.css',
        'public/lib/components-font-awesome/css/font-awesome.min.css',
        'public/lib/ionicons/css/ionicons.css',
        'public/lib/angular-toastr/dist/angular-toastr.min.css'
      ],
      js: [
        'public/lib/admin-lte/plugins/jQuery/jQuery-2.2.0.min.js',
        'public/lib/admin-lte/plugins/jQueryUI/jquery-ui.min.js',
        'public/lib/admin-lte/bootstrap/js/bootstrap.min.js',
        'public/lib/admin-lte/plugins/select2/select2.full.min.js',
        'public/lib/admin-lte/dist/js/app.min.js',
        'public/lib/admin-lte/plugins/timepicker/bootstrap-timepicker.js',
        'public/lib/admin-lte/plugins/chartjs/Chart.min.js',
        'public/lib/admin-lte/plugins/morris/raphael-min.js',
        'public/lib/admin-lte/plugins/morris/morris.min.js',
        'public/lib/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'public/lib/admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'public/lib/admin-lte/plugins/datepicker/bootstrap-datepicker.js',
        'public/lib/admin-lte/plugins/daterangepicker/moment.js',
        'public/lib/admin-lte/plugins/daterangepicker/daterangepicker.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-translate/angular-translate.min.js',
        'public/lib/angular-translate-loader-partial/angular-translate-loader-partial.min.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/angular-sanitize/angular-sanitize.min.js',
        'public/lib/angular-toastr/dist/angular-toastr.tpls.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
