'use strict';

angular.module('core').controller('MeanjsHeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });

    /**
     * Builds the image url of the profile image of the current user
     * Returns a default image if there isn't an image set
     * */
    /*
    $scope.buildProfileImage = function () {
      if ($scope.authentication.currentUser) {
        return $scope.authentication.currentUser.profileImageURL;
      } else {
        return ApiValues.baseImageUrl + '/modules/core/img/brand/Q_logo_white.png';
      }
    };
    */
    
  }
]);
