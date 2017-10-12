(function () {
    'use strict';

    angular.module('App').directive('repeatDirectiveForMessages', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var value = attrs.myRepeatDirective;
                
                if (scope.$last){
                    let container = angular.element(document.querySelector('.messages .simplebar-scroll-content'))[0],
                        content = angular.element(document.querySelector('.messages .simplebar-content'))[0];
                    if(container) {
                        $timeout(() => {
                            container.scrollTop = content.clientHeight;
                        }, 50);                        
                    }                        
                    console.log("myRepeatDirective catch the last element in ng-repeat!");
                }
            }
        };
    }])

})();