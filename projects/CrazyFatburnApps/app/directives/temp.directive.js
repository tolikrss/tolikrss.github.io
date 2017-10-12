(function () {
    'use strict';

    angular.module('App').directive('directiveTemp', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
               console.log('directiveTemp');              
            }
        };
    }]);

})();