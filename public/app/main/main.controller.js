'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope, $state, $http, Auth, $stateParams) {

    // Get user data from auth factory.
    Auth.getUserData().then(function(data) {
      $scope.user = data;
    })

    $http.get('/lang')
      .success(function(data) {
        $scope.language = data;
      })

    $scope.state = $state;
    $scope.language;
    console.log($scope.state.current.name)

      //make it possible for index to send with the patient_id
      $scope.viewPatient = function(patient_id) {
        var post_id;
       // if($stateParams.patient_id) {
        /*if(patient_id === undefined) {
          console.log($stateParams.patient_id);
          post_id = '551d3bab8b4a150417b30877';//$stateParams.patient_id;
        } else {*/
        if($scope.user._id !== '551d398f5dfbc50c2a98e131'){
          post_id = $scope.user._id;}
        else{
          post_id = '551d3bab8b4a150417b30877';//$stateParams.patient_id;
        }
        console.log("userid" + $scope.user._id);
        console.log("patientid" + patient_id);
        console.log("patientid2");
       // }
        patient_id = '551d3bab8b4a150417b30877';
        $state.go('utveckling', {patient_id: post_id});


      }

      // User object was updated. Need to notify view.
    $scope.$on('user.update', function(event, args) {
      $scope.user = args;
      //console.log(args);
    })

    $scope.logout = function() {
      Auth.logout().then(function() {
        console.log('logged out');
        $state.go('login');
      })
    }

    

  });