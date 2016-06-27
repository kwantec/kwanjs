'use strict';

angular.module('core').controller('HomeController',
    ['$scope','$translate','$translatePartialLoader','Authentication',
        function ($scope, $translate, $translatePartialLoader, Authentication) {
            // This provides Authentication context.
            $scope.authentication = Authentication;

            $translatePartialLoader.addPart('core');
            $translate.refresh();
        }
]);
