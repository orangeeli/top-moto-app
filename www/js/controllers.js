angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MotorcyclesCtrl', function($scope) {
  $scope.motorcycles = [
    { name: 'Yamaha Vmax', price: 0, image: "http://www.yamaha-motor.eu/eu/binary/2015_YAM_LibertyYam_FR_CUSTOM_STA__001_gal_worlds_full_tcm114-626363.jpg", id: 1 },
    { name: 'Honda NC700X', price: 1, image: "http://blog.motorcycle.com.vsassets.com/wp-content/uploads/2011/11/2012-Honda-NC700X-04-500x345.jpg", id: 2 },
    { name: 'BMW R nine T', price: 2, image: "http://kickstart.bikeexif.com/wp-content/uploads/2015/01/bmw-r-ninet-cherry-1-625x416.jpg", id: 3 },
  ];
})

.controller('MotorcycleCtrl', function($scope, $stateParams) {

  var id, motorcycles;

  id = ($stateParams.motorcycleId-1);
  motorcycles = [
    { name: 'Yamaha Vmax', price: 0, image: "http://www.yamaha-motor.eu/eu/binary/2015_YAM_LibertyYam_FR_CUSTOM_STA__001_gal_worlds_full_tcm114-626363.jpg", id: 1 },
    { name: 'Honda NC700X', price: 1, image: "http://blog.motorcycle.com.vsassets.com/wp-content/uploads/2011/11/2012-Honda-NC700X-04-500x345.jpg", id: 2 },
    { name: 'BMW R nine T', price: 2, image: "http://kickstart.bikeexif.com/wp-content/uploads/2015/01/bmw-r-ninet-cherry-1-625x416.jpg", id: 3 },
  ];


  $scope.motorcycle = motorcycles[id];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SearchCtrl', function($scope, $state) {
  $scope.search = function(){
    $state.go('app.motorcycles');
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
