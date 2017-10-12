(function () {
    'use strict';


    angular.module('App').directive('simplebar', function() { // directive, that stop wheel-scroll event propagation for data-simplebar library
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind("wheel", (e) => {
                  var elem = element[0].children[2];
                  if(((elem.scrollTop === (elem.scrollHeight - elem.clientHeight) && e.wheelDeltaY < 0) || elem.scrollTop === 0 && e.wheelDeltaY > 0)) { 
                    e.preventDefault();
                  }
                });
            }
        };
    });
})();