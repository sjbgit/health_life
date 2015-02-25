'use strict';

/**
 * @ngdoc function
 * @name healthLifeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthLifeApp
 */
angular.module('healthLifeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
