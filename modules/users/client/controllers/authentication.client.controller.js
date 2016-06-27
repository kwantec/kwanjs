'use strict';

angular.module('users').controller('AuthenticationController',
    ['$scope', '$translate','$translatePartialLoader','$state', '$http', '$location', '$window', 'Authentication', 'PasswordValidator',
  function ($scope, $translate, $translatePartialLoader, $state, $http, $location, $window, Authentication, PasswordValidator) {

    $translatePartialLoader.addPart('users');
    $translate.refresh();

    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    $scope.signup = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.signin = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // OAuth provider request
    $scope.callOauthProvider = function (url) {
      if ($state.previous && $state.previous.href) {
        url += '?redirect_to=' + encodeURIComponent($state.previous.href);
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url;
    };


    /***
     * Closes the login dialog with a success
     * */
    $scope.loginSuccess = function () {
      $('#loginModal').hide(function () {
        $scope.visible = false;
        var body = $(document.body);
        body.css("overflow", "auto"); // Adding scroll to body
      });
    };

    // open dialog function
    $scope.openLoginDialog = function () {
      var modal = $("#loginModal");
      var body = $(document.body);

      modal.show(function () {
        body.css("overflow", "hidden"); // Avoid scroll of body
        modal.css("overflow", "auto");  // Adding scroll to modal
      });
    };

    /**
     * Closes the login modal
     * */
    $scope.closeModal = function (onlyCloseModal) {
      $('#loginModal').hide(function () {
        $scope.visible = false;
        var body = $(document.body);
        body.css("overflow", "auto"); // Adding scroll to body

        // FIXME recover this that is commented out
        /*
        httpBuffer.rejectAll();
        Authentication.logout(function () {
          if (!onlyCloseModal) {
            if ($scope.isExpiredSession) {
              $window.location.href = '/';
            } else {
              $location.path("/");
            }
          }
        });
        */

      });
    };



  }
]);
