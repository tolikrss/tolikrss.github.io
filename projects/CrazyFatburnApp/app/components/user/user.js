(function () {
    'use strict';

    angular.module('App').component('user', {
        templateUrl: "./app/components/user/user.html",
        bindings: {
            userId: '='
        },
        controllerAs: 'vm',
        controller: userController
    });

    userController.$inject = ['$rootScope'];


    function userController ($rootScope) {

        var vm = this;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        }

    }
})();

