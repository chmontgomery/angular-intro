/* global angular */
(function () {
  'use strict';

  angular.module('newsApp.controllers', ['newsApp.services'])
    .controller('mainController',
    ['$scope', 'dylanService',
      function ($scope, dylanService) {
        $scope.instruments = [];
        $scope.msg = 'Hello, World!';
        dylanService.getQuotes('MSFT|US|||,AAPL|US|||')
          .then(function(data) {
            $scope.instruments = data.GetInstrumentResponse.InstrumentResponses;
          });
        $scope.addInstrument = function(ticker) {
          dylanService.getQuotes(ticker + '|US|||')
            .then(function(data) {
              console.log(data.GetInstrumentResponse.InstrumentResponses[0]);
              $scope.instruments.push(data.GetInstrumentResponse.InstrumentResponses[0]);
            });
        };
        $scope.ticker = '';
        $scope.addTicker = function() {
          $scope.addInstrument($scope.ticker);
          $scope.ticker = '';
        };
      }]);
})();
