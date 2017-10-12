/*
 Language system service
 created by Oza / 28-12-2016
 */

(function () {
  'use strict';

  angular.module('App')
    .factory('$lang', ['$window', function ($window) {
      var self = this;

      var localeData = $window.localeData;

      self.get = function (key) {
        if (angular.isDefined(localeData[key])) {
          return localeData[key];
        }
        else { 
          return key;
        }
      };

      self.init = function (obj) {
        // localeData = Object.assign(localeData, obj);
        // localeData = obj;

        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            localeData[prop] = obj[prop];
          }
        }
      };

      return self;
    }]);

})();