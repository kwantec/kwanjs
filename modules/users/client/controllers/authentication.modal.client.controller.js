'use strict';

angular.module('users').controller('AuthenticationModalController',
    ['$scope', '$translate','$translatePartialLoader','$state', '$http', '$location', '$window', 'toastr', 'Authentication', 'PasswordValidator',
  function ($scope, $translate, $translatePartialLoader, $state, $http, $location, $window, toastr, Authentication, PasswordValidator) {

    $translatePartialLoader.addPart('users');
    $translate.refresh();

    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // CODE BELOW ADDED FOR HANDLING OF LOGIN DIALOG

    $scope.isSignUpMode = false;
    $scope.error = '';
    $scope.checkboxTermsConditions = false;

    $scope.modalTitle = 'Titulo';
    $scope.modalSubtitle = 'SubTitulo';
    $scope.signinFacebookUri = 'http://www.facebook.com/login';// FIXME put correct URL
    $scope.signinGoogleUri = 'http://www.google.com/login';// FIXME put correct URL
    $scope.pEmail = 'Enter your email here';
    $scope.pPassword = 'Enter your password here';
    $scope.pFirstName = 'first name';
    $scope.pLastName = 'last name';
    $scope.pBirthday = 'bithday';
    $scope.pEmail = 'email';
    $scope.pPassword = 'enter you password here';
    $scope.pRPassword = 'write your password again';
    $scope.EMAIL_SEND = 'A confirmation email was sent to you';
    $scope.EMAIL_CONFIRM_TITLE = 'Email confirmation';
    $scope.pFillAllFields = 'Please fill all required fields';
    $scope.pIncomplete = 'Information incomplete';
    $scope.pPasswordError = 'Passwords do not match';
    $scope.LOGIN_ERROR = 'A login error ocurred, please try again';
    $scope.FILL_LOGIN = 'Please enter your username and password';


    $scope.credentials = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      birthday: '',
      repeatPassword: ''
    };

    

    /**
     * Clears the information an fields of the login dialog
     * */
    $scope.clearAuthDialog = function() {
      $scope.isSignUpMode = false;
      $scope.error = '';
      $scope.credentials = {};
      $scope.checkboxTermsConditions = false;
    };


    $scope.signup = function () {
      if ($scope.checkboxTermsConditions) {
        if ($scope.credentials.password === $scope.credentials.repeatPassword) {
          //Building the credentials payload
          if ($scope.credentials.email && $scope.credentials.birthday && $scope.credentials.firstName && $scope.credentials.lastName) {
            $scope.credentials.username = $scope.credentials.email;
            $scope.credentials.displayName = $scope.credentials.firstName + ' ' + $scope.credentials.lastName;

            Authentication.signUp($scope.credentials).then(function (response) {
              //Setting the current user object
              Authentication.currentUser = Authentication.registerUser(response);

              //Control flags ???
              $scope.tabControlls = '2';
              $scope.buttonsControlls = '2';

              //Closing the login dialog
              $scope.loginSuccess();
              //Clearing the variables related to the login dialog
              $scope.clearAuthDialog();
              //sending confirm email message
              toastr.success($scope.EMAIL_SEND, $scope.EMAIL_CONFIRM_TITLE);

            }).catch(function (response) {
              toastr.warning($scope.pError, response.message);
            });
          } else {
            toastr.warning($scope.pFillAllFields, $scope.pIncomplete);
          }
        } else {
          toastr.warning($scope.pPasswordError, $scope.pIncomplete);
        }
      } else {
        toastr.warning($scope.pFillAllFields, $scope.pIncomplete);
      }
    };


    /**
     * Realizes the sign in petition from the login dialog
     * */
    $scope.logIn = function () {
      //validate user and password is not empty
      if ($scope.credentials && $scope.credentials.email && $scope.credentials.password) {
        //Requesting the login petition
        Authentication.login($scope.credentials).then(function (response) {
          //Clearing the credentials for security
          $scope.credentials.password = "";

          //Setting the current user object
          Authentication.currentUser = Authentication.registerUser(response);

          /* RECOVER THIS httpBuffer functionality
          //We liberate the httpBuffer if any request is pending
          if (!httpBuffer.isBufferEmpty()) {
            var updater = function (config) {
              return config;
            };

            httpBuffer.retryAll(updater);
          }
          */

          // And close login dialog
          $scope.loginSuccess();

          //Clearing the variables related to the login dialog
          $scope.clearAuthDialog();

          if ($scope.isLogginAndContinue) {
            $location.path('/');
          }

        }).catch(function (response) {
          $scope.error = $scope.LOGIN_ERROR;
        });
      } else {
        $scope.error = $scope.FILL_LOGIN;
      }
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

    /**
     * Toggles between the login and sign up modes
     * */
    $scope.toggleSignUpMode = function () {
      $scope.isSignUpMode = !$scope.isSignUpMode;

      //Deleting the error message
      $scope.error = '';
    };


  }
]);
