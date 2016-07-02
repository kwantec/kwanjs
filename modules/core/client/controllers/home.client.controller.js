'use strict';

angular.module('core').controller('HomeController',
    ['$scope','$translate','$translatePartialLoader','Authentication', 'ClientData',
        function ($scope, $translate, $translatePartialLoader, Authentication, ClientData) {
            // This provides Authentication context.
            $scope.authentication = Authentication;

            $translatePartialLoader.addPart('core');
            $translate.refresh();

            $scope.dummy = function(){
                alert( ClientData.sayHi() );
                //alert('hi');
            };

        }
]);
