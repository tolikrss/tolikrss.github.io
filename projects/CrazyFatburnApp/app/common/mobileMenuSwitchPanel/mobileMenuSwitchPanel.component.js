(function () {
  'use strict';
  
  angular.module('App').component('mobileMenuSwitchPanel', {
    templateUrl: "./app/common/mobileMenuSwitchPanel/mobileMenuSwitchPanel.html",
    controllerAs: 'vm',
    bindings: {
      // userName: '<'
        backBtn: '<',
        backPage: '<'
    },
    controller: mobileMenuSwitchPanelController
  });

    mobileMenuSwitchPanelController.$inject = [];

  function mobileMenuSwitchPanelController () {
      var vm = this;
      vm.openMobileMenu = function() {
          var navBar  = angular.element(document.querySelector('.column-navbar'))[0],
              content = angular.element(document.querySelector('.column-content'))[0],
              navbar  = angular.element(document.querySelector('.large-navbar-block'))[0];

          console.dir(navBar);
          console.dir(content);
          console.dir(navbar);
          navBar.classList.toggle('open');
          content.classList.toggle('mobile-menu-opened');
          content.setAttribute("style", `height: ${navbar.clientHeight}px; overflow: hidden;`);
      }

      vm.$onInit = function() {
        // console.dir('vm.userName - ');
        // console.dir(vm.userName);
      }
  }
})();