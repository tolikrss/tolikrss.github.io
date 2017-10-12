(function () {
  'use strict';
  
  angular.module('App').component('largeNavbar', {
    templateUrl: "./app/common/largeNavbar/largeNavbar.html",
    controllerAs: 'vm',
    controller: largeNavbarController
  });

    largeNavbarController.$inject = ['$state', '$document', '$element'];


  function largeNavbarController ($state, $document, $element) {
      var vm = this;
      
      vm.dropDown = angular.element(document.querySelector('.drop-down-user-menu'))[0];

      vm.toggleDropDown = function() {
        vm.dropDown.classList.toggle('show');
      };

      vm.closeMobileMenu = function() {
        var navBar  = angular.element(document.querySelector('.column-navbar'))[0],
            content = angular.element(document.querySelector('.column-content'))[0],
            navbar  = angular.element(document.querySelector('.large-navbar-block'))[0];
        navBar.classList.toggle('open');          
        content.classList.toggle('mobile-menu-opened');
        content.removeAttribute("style");
      };

      vm.getCurrentRoute = function() {
        return $state.current.url;
      };

      vm.$onInit = function() {
        $document.on('click', function (e) {
        var dropDown = angular.element(document.querySelector('.drop-down-user-menu'))[0];
          if ( e.target.parentNode && e.target.parentNode.parentNode && !(dropDown == e.target.parentNode || $element[0].localName == e.target.parentNode.parentNode) ) {
            if (dropDown) dropDown.classList.remove('show');            
          }
        });
      }
  }
})();

