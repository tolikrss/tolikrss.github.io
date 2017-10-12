(function () {
    'use strict';

    angular.module('App').component('wall', {
        templateUrl: "./app/components/wall/wall.html",
        controllerAs: 'vm',
        controller: wallController
    });

    wallController.$inject = ['$rootScope'];


    function wallController ($rootScope) {

        var vm = this;
        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        };

        vm.disableNameEditing = true;

        vm.myWall = false;

        vm.clearInitialShare = function(e) {
            if(e.innerText === "Share your thoughts here. Don't be shy.") e.innerText = '';
        };

        vm.clearShare = function() {
            if (vm.shareContent === "Share your thoughts here. Don't be shy.") {
                vm.shareContent = '';
            }
        };

        vm.fillShare = function() {
            if(vm.shareContent === "") {
                vm.shareContent = "Share your thoughts here. Don't be shy.";
            }
        };

        vm.contentEditingDone = function(e) {
            if (e.shiftKey && e.code === "Enter") {
                return;
            } else if (e.code === "Enter") {
                //send vm.shareContent
                vm.shareContent = "Share your thoughts here. Don't be shy.";
                e.preventDefault();
                var activeElement = document.activeElement;
                if (activeElement) {
                    activeElement.blur();
                }
                return false;
            }
        };

        // vm.photos = [
        //     {
        //         date: '11 July 2018',
        //         url: '/assets/img/user1.jpg',
        //         likesCount: 3
        //     },
        //     {
        //         date: '11 July 2018',
        //         url: '/assets/img/user1.jpg',
        //         likesCount: 3
        //     },
        //     {
        //         date: '11 July 2018',
        //         url: '/assets/img/user1.jpg',
        //         likesCount: 3
        //     },
        //     {
        //         date: '11 July 2018',
        //         url: '/assets/img/user1.jpg',
        //         likesCount: 3
        //     }
        // ];

    }
})();

