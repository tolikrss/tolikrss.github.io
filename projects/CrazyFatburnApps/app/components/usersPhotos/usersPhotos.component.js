(function () {
    'use strict';

    angular.module('App').component('usersPhotos', {
        templateUrl: "./app/components/usersPhotos/usersPhotos.html",
        controllerAs: 'vm',
        bindings: {
            activeAnchor: '<'
        },
        controller: usersPhotosController
    });

    usersPhotosController.$inject = ['$scope', '$rootScope', '$location'];

    function usersPhotosController($scope, $rootScope, $location) {

        var vm = this;
        vm.$onInit = function() {
            $rootScope.onComponentInit();
            vm.activeAnchor = vm.activeAnchor;
            console.log(vm.activeAnchor);
            $location.hash('anchor' + vm.activeAnchor);
        };
        //vm.gotoAnchor(vm.activeAnchor);

        vm.openMobileMenu = function() {
          var navBar  = angular.element(document.querySelector('.column-navbar'))[0],
              content = angular.element(document.querySelector('.column-content'))[0],
              navbar  = angular.element(document.querySelector('.large-navbar-block'))[0];

          navBar.classList.toggle('open');
          content.classList.toggle('mobile-menu-opened');
          content.setAttribute("style", `height: ${navbar.clientHeight}px; overflow: hidden;`);
      }

        vm.photos = [
            {
                date: '11 July 2018',
                url: '/assets/img/user1.jpg',
                likesCount: 3
            },
            {
                date: '11 July 2018',
                url: '/assets/img/user1.jpg',
                likesCount: 3
            },
            {
                date: '11 July 2018',
                url: '/assets/img/user1.jpg',
                likesCount: 3
            },
            {
                date: '11 July 2018',
                url: '/assets/img/user1.jpg',
                likesCount: 3
            }
        ];



        vm.gotoAnchor = function(x) {
            $location.hash('anchor' + x);
        };

    }
})();

