'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core', ['translations','ngAnimate', 'toastr']);
ApplicationConfiguration.registerModule('core.admin', ['translations', 'core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['translations', 'ui.router']);
