(function () {
    'use strict';

    angular.module('App').directive('setFocusToElement', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // console.dir(element);
                element[0].focus();
            }
        };
    });

})();