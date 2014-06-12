/* global angular */
(function () {
  'use strict';

  angular.module('newsApp.controllers', ['newsApp.services'])
    .controller('mainController',
    ['$scope', 'dylanService',
      function ($scope, dylanService) {
        $scope.msg = 'Hello, World!';
        dylanService.getQuotes()
          .then(function(data) {
            $scope.instruments = data.GetInstrumentResponse.InstrumentResponses;
          });
      }]);
})();
