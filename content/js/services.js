/* global angular */
(function () {
  'use strict';

  angular.module('newsApp.services', [])
    .factory('dylanService', ['$q', '$http', function ($q, $http) {
      return {
        getQuotes: function () {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: 'http://api.wsj.net/api/dylan/quotes/v2/comp/quote?id=MSFT|US|||,AAPL|US|||&needed=CompositeTrading|Financials|BlueGrassChannels&MaxInstrumentMatches=1&ckey=cecc4267a0',
            headers: {
              'Accept': 'application/json',
              'Dylan2010.EntitlementToken': 'cecc4267a0194af89ca343805a3e57af'
            }
          }).
            success(function (data) {
              deferred.resolve(data);
            }).
            error(function (data) {
              deferred.reject(data);
            });
          return deferred.promise;
        }
      };
    }]);

})();