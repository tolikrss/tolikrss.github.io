/**
 * Created by VerteX on 11.07.2017.
 */

(function() {
    'use strict';

    angular.module('App').factory('$userRoles', userRoles );

    userRoles.$inject = [];

    function userRoles() {
        var self = this;

        self.company = true;

        self.freelancer = false; 

        return self;
    }
})();