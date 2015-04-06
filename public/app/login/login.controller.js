'use strict';

angular.module('myApp')
  .controller('LoginCtrl', function($scope, $http, $state, $rootScope, Auth) {
    $http.get('/lang')
      .success(function(data) {
        $scope.language = data;
      })
    
    $scope.user = {};

      // Create new patient via the api.
      $scope.submitcreate = function(form) {
        if (!form.$valid) {
          console.log("Not valid");
          return;
        } else {
          console.log($scope.new_user);

          $http.post('/api/patients/', $scope.new_user)
              .success(function(data, status, headers, config) {
                console.log(data);
                $state.go('index', {message: 'Du registrerade en ny användare'});
               console.log({email: $scope.new_user.email, password:  $scope.new_user.password});
                Auth.login( {email: $scope.new_user.email, password:  $scope.new_user.password}).then(
                    function(user) {

                      $state.go('index');
                    },
                    function(error) {
                      $scope.message = 'Felaktiga inloggningsuppgifter.'
                      $scope.user = {};
                    })


              })
              .error(function(data, status, headers, config) {
                console.log(data);
              });
        }
      }

    // Call auth factory with credentials. 
    $scope.user_id;
    $scope.submit = function(login) {

      if (!login.$valid) return;
      Auth.login($scope.user).then(
        function(user) {

          $state.go('index');
        }, 
        function(error) {
          $scope.message = 'Felaktiga inloggningsuppgifter.'
          $scope.user = {};
        })
    };
    
  });