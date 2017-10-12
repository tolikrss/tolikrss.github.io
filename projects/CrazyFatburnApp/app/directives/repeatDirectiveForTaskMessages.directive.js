(function () {
    'use strict';

    angular.module('App').directive('repeatDirectiveForTaskMessages', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // console.dir(scope);
                if (scope.$last){
                    $timeout(() => {
                        var container = angular.element(document.querySelector('.messages-panel .simplebar-scroll-content'))[0],
                        content = angular.element(document.querySelector('.messages-panel .simplebar-content'))[0];                    
                        // console.log('container - ');
                        // console.dir(container);
                        // console.log('content - ');
                        // console.dir(content);
                        container.scrollTop = content.clientHeight;
                    });         
                    console.log("@myRepeatDirective from taskReport catch the last element in ng-repeat!");
                }
            }
        };
    }])

})();