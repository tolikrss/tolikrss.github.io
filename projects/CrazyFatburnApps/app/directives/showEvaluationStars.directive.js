/*
 Show evaluation stars directive
 created by Oza / 29-12-2016
 */

(function () {
  'use strict';

  angular.module('App').directive('showEvaluationStars', [
    function () {
      return {
        restrict: 'AE',
        scope: {
          evaluation: '='
        },
        link: function (scope, element, attr) {

          for (var i = 1; i <= 5; i++) {
            if (i <= scope.evaluation) {
              element.append(angular.element('<span class="icon-star-2">'));
            }
            else {
              element.append(angular.element('<span class="icon-star-1">'));
            }
          }

        }
      }
    }])
})();
