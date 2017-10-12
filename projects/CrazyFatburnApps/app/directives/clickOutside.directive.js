/*
 Runs callback at click outside element
 created by Oza / 12-01-2016
 */

(function () {
    'use strict';

    angular.module('App').directive('clickOutside', ['$document', function ($document) {
    return {
        restrict: 'A',
        scope: {
            clickOutside: '&'
        },
        link: function (scope, elem, attr) {

            $document.on('click', function (e) {
                if (elem !== e.target && !elem[0].contains(e.target)) {
                    scope.$apply(function () {
                        scope.$eval(scope.clickOutside);
                    });
                }
            });
        }
    }

    }])
})();