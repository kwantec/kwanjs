(function () {
    "use strict";
    // Authentication service for user variables
    angular.module("users").directive('loginDialog', ['$injector', loginDialog]);

    function loginDialog($injector) {
        return {
            restrict: 'A',
            templateUrl: "modules/users/client/views/authentication/authentication.modal.client.view.html",
            scope: {},
            link: function (scope) {

                //Obtaining the reference for the $rootScope
                var $rootScope = $injector.get('$rootScope');

                /**
                 * Opens the login dialog
                 * */
                var showDialog = function () {
                    var modal = $("#loginModal");
                    var body = $(document.body);

                    //Sending the broadcast of the login dialog opened
                    //$rootScope.$broadcast('LoginForExpiredSession');

                    modal.show(function () {
                        body.css("overflow", "hidden"); // Avoid scroll of body
                        modal.css("overflow", "auto");  // Adding scroll to modal
                    });
                };

                var showDialogAndContinue = function () {
                    var modal = $("#loginModal");
                    var body = $(document.body);

                    //Sending the broadcast of the login dialog opened
                    //$rootScope.$broadcast('isLogginAndContinue');

                    modal.show(function () {
                        body.css("overflow", "hidden"); // Avoid scroll of body
                        modal.css("overflow", "auto");  // Adding scroll to modal
                    });
                };

                //scope.$on('event:sessionTimeout', showDialog);
                //scope.$on('event:loginAndContinue', showDialogAndContinue);
            }
        };
    }
}());
