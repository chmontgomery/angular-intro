/* global angular */
(function () {
  'use strict';

  angular.module('newsApp.directives', [])
    .directive('ngEnter', function () {
      return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if (event.which === 13) {
            scope.$eval(attrs.ngEnter, {'event': event});
            event.preventDefault();
          }
        });
      };
    })
    .directive('focusMe', function() {
      return function(scope, element) {
        element[0].focus();
      };
    })
    .directive('displayTrade', function() {
      return {
        restrict: 'E',
        scope: {
          obj: '='
        },
        template: '<div>{{ obj.Value | isoCurrency:obj.Iso }}</div>'
      };
    });

})();
