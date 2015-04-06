'use strict';

angular.module('myApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('createaccount', {
        url: '/createaccount',
        templateUrl: 'app/createaccount/createaccount.html',
        controller: 'createaccCtrl'
      });
  });