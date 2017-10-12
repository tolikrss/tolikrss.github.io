(function () {
    'use strict';

    angular.module('App').directive('repeatDirectiveForTaskChat', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // console.dir(scope);
                if (scope.$last){
                    $timeout(() => {
                        var container = angular.element(document.querySelector('.chat-content .simplebar-scroll-content'))[0],
                        content = angular.element(document.querySelector('.chat-content .simplebar-content'))[0];                    
                        container.scrollTop = content.clientHeight;
                    });         
                    console.log("@myRepeatDirective from taskReport catch the last element in ng-repeat!");
                }
            }
        };
    }]);

})();