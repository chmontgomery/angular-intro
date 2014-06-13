/* global angular */
(function () {
  'use strict';

  angular.module('newsApp.filters', [])
    .filter('isoCurrency', ['$filter', function($filter) {
      return function(value, iso) {
        return iso === 'USD' ? $filter('currency')(value) : value;
      };
    }]);

})();
