(function () {
    'use strict';

    angular.module('App').directive('disableScrollEventPropagation', function() { // directive, that stop wheel-scroll event propagation
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind("wheel", (e) => {
                  var elem = element[0];
                  if(((elem.scrollTop === (elem.scrollHeight - elem.clientHeight) && e.wheelDeltaY < 0) || elem.scrollTop === 0 && e.wheelDeltaY > 0)) { 
                    e.preventDefault();
                  }
                });
            }
        };
    });

})();