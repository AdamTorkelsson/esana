'use strict';

angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('utveckling',{
          url: '/utveckling/:patient_id',
        templateUrl: 'app/utveckling/utveckling.html',
        controller: 'UtvCtrl'
      });
  });