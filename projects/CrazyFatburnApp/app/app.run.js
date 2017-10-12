(function () {
  'use strict';

  angular.module('App')
    .run([
        '$rootScope', 
        '$window',
        '$timeout',
        'ngDialog',
        function ($rootScope, $window, $timeout, ngDialog) {
            // console.log('app run');
            $rootScope.showPreloader = true;
            $rootScope.popupOpeningStart = false;

            $rootScope.$on('popupOpeningStart', function() {
                // $rootScope.popupOpeningStart = true;
            });

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
                        // console.log('$stateChangeStart');               
                        ngDialog.closeAll();         
                        $rootScope.showPreloader = true;
            });

            $rootScope.$on('popupOpeningStart', function() {
                // $rootScope.popupOpeningStart = true;
            });

            $rootScope.onComponentInit = function() {
                // $rootScope.showPreloader = false;
                $timeout(() => {
                    $rootScope.showPreloader = false;
                }, 1);
            }

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
                        // console.log('$stateChangeSuccess');
            });
            
            $rootScope.$on('ngDialog.opened', function (e, $dialog) {
                $rootScope.popupOpeningStart = false;
                // console.log('ngDialog .opened: ' + $dialog.attr('id'));
            });

            function screenTypeTest() {
                if($window.innerWidth < 768)
                    return 'mobile'
                if($window.innerWidth >= 768 && $window.innerWidth <= 1199)
                    return 'tablet'
                if($window.innerWidth > 1199)
                    return 'desktop'
            }
            $rootScope.screenType = screenTypeTest();
            console.log($rootScope.screenType);
            // $scope.$watch(function() {
            //     return $rootScope.screenType;
            // }, function() {
            //     console.log('screen type - ', $rootScope.screenType);
            // }, true);
            angular.element($window).bind('resize', () => {
                console.log('screen type - ', $rootScope.screenType);
                $rootScope.screenType = screenTypeTest();
            });
        }
    ]);

})();