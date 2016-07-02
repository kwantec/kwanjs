'use strict';

angular.module('core').controller('SidebarController',
    ['$scope', '$translate','$translatePartialLoader', '$state', 'Authentication', 'Menus', 'ClientData',
  function ($scope, $translate, $translatePartialLoader, $state, Authentication, Menus, ClientData) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    $translatePartialLoader.addPart('core');
    $translate.refresh();


    /**
     * Builds the image url of the profile image of the current user
     * Returns a default image if there isn't an image set
     * */

    $scope.buildProfileImage = function () {
      if ($scope.authentication.currentUser) {
        return $scope.authentication.currentUser.profileImageURL;
      } else {
        //return ClientData.baseImageUrl() + 'lib/admin-lte/dist/img/user2-160x160.jpg';
        return 'lib/admin-lte/dist/img/user2-160x160.jpg';
      }
    };
    
  }
]);
