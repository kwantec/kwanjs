'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window','$injector','$localStorage','$q','ApiValues',
    function ($window, $injector, $localStorage, $q, ApiValues) {

        var signUpUrl = ApiValues.apiBaseUrl() + '/auth/signup';
        var signInUrl = ApiValues.apiBaseUrl() + '/auth/signin';
        var signOutUrl = ApiValues.apiBaseUrl() + '/auth/signout';

        //var signUpUrl = 'http://localhost:3000/auth/signup';
        //var signInUrl = 'http://localhost:3000/auth/signin';
        //var signOutUrl = 'http://localhost:3000/auth/signout';

        /*
         function getCurrentUser() {
         if (isLoggedIn())
         return $localStorage.user;
         else
         return undefined;
         }
         var currentUser = getCurrentUser(); //Sets the current user each time that this singleton is created

         function getResource() {
         var $resource = $injector.get('$resource');

         var resource = $resource("", {}, {
         signout: { "url": signOutUrl, method: 'GET', isArray: false }
         });

         return resource;
         }


         function logout(_callBack) {
         getResource().signout(function () {
         delete $localStorage.token;
         delete $localStorage.user;
         //Authentication.currentUser = undefined;
         currentUser = undefined;
         return _callBack();
         }, function (_err) {
         console.log(_err);
         });
         }



         //Process the login petition from the controllers
         function login(credentials) {
         var loginDefer = $q.defer();

         //Getting the $http service via injector for avoiding collisions with $http interceptor
         var $http = $injector.get('$http');


         $http.post(signInUrl, credentials).success(function (response) {
         // If successful we assign the response to the global user model
         registerUser(response);

         //Returning the resolution of the request
         loginDefer.resolve(response);
         }).error(function (response) {
         //Returning the resolution of the request
         loginDefer.reject(response);
         });

         return loginDefer.promise;
         }
         */

        //Process the sign up petition from the controllers
        function signUp(credentials) {
            //Defer object for the signUp promise
            var signUpDefer = $q.defer();

            //Getting the $http service via injector for avoiding collisions with $http interceptor
            var $http = $injector.get('$http');
            $http.post(signUpUrl, credentials).success(function (response) {
                //Returning the response of the api
                signUpDefer.resolve(response);
            }).error(function (response) {
                signUpDefer.reject(response);
            });

            return signUpDefer.promise;
        }

        /*
         function getToken() {
         return $localStorage.token;
         }

         // Sets the current user on the service
         function setCurrentUser(user) {
         currentUser = user;
         }

         function isLoggedIn() {
         if ($localStorage.token) {
         console.log('$localStorage.token == true');
         var user = $localStorage.user;
         if (user !== undefined && user !== '') {
         console.log('isLoggedIn() == true');
         return true;
         }else {
         console.log('isLoggedIn() == false');
         return false;
         }
         } else {
         console.log('--$localStorage.token == false');
         console.log('--isLoggedIn() == false');
         return false;
         }
         }

         //Sets the logged user info on local storage
         function registerUser(user) {
         //Setting the user image
         if (user.profileImageURL && user.profileImageURL.indexOf('http') === -1) {
         user.profileImageURL = ApiValues.baseImageUrl() + user.profileImageURL;
         }
         console.log('Profile', user.profileImageURL);

         $localStorage.token = user.token;
         $localStorage.user = user;
         setCurrentUser(user);
         return user;
         }

         */
        return {
            user: $window.user,
            //currentUser: currentUser,
            //getToken: getToken,
            //logout: logout,
            //login: login,
            signUp: signUp
            //isLoggedIn: isLoggedIn,
            //registerUser: registerUser
        };

    }
]);
