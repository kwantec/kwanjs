'use strict';

angular.module('core').controller('HeaderController',
    ['$scope', '$translate','$translatePartialLoader','$rootScope', '$state', 'Authentication', 'Menus', 'ApiValues',
  function ($scope, $translate, $translatePartialLoader, $rootScope, $state, Authentication, Menus, ApiValues) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    $translatePartialLoader.addPart('core');
    $translate.refresh();

    $scope.openLoginDialog = function()
    {
        //alert('Display login dialog here');
        var modal = $("#loginModal");
        var body = $(document.body);

        //Sending the broadcast of the login dialog opened
        $rootScope.$broadcast('LoginDialogOpened');

        modal.show(function () {
          body.css("overflow", "hidden"); // Avoid scroll of body
          modal.css("overflow", "auto");  // Adding scroll to modal
        });

    };

    /**
     * Builds the image url of the profile image of the current user
     * Returns a default image if there isn't an image set
     * */

    $scope.buildProfileImage = function () {
      if ($scope.authentication.currentUser) {
        return $scope.authentication.currentUser.profileImageURL;
      } else {
        //return ApiValues.baseImageUrl() + 'lib/admin-lte/dist/img/user2-160x160.jpg';
        return 'lib/admin-lte/dist/img/user2-160x160.jpg';
      }
    };

    
  }
]);
