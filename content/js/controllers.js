/* global angular */
(function () {
  'use strict';

  var newsApp = angular.module('newsApp.controllers', []);

  newsApp.controller('mainController',
    ['$scope',
      function ($scope) {
        $scope.msg = 'Hello, World!';
      }]);
})();
