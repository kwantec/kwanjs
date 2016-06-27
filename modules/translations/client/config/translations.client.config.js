'use strict';

angular.module('translations', [ 'pascalprecht.translate', 'ngSanitize'])
    .config(function($translateProvider, $translatePartialLoaderProvider ) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'modules/translations/client/assets/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('en-US');

        // For security. See https://angular-translate.github.io/docs/#/guide/19_security
        $translateProvider.useSanitizeValueStrategy('sanitize');

    });
