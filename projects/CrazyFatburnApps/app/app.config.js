/*
  Main app module config
  created by German / 11-12-2016
*/

(function (window, angular) {
  'use strict';

  angular.module('App')
    .config([
        '$interpolateProvider',
        'ngDialogProvider',
        function ($interpolateProvider, ngDialogProvider) {
            $interpolateProvider.startSymbol("[[");
            $interpolateProvider.endSymbol("]]");
            
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: false,
                closeByNavigation: true,
                closeByDocument: true,
                closeByEscape: true
            });
        }
    ]);

})(window, window.angular);