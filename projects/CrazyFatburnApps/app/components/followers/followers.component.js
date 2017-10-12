(function () {
    'use strict';

    angular.module('App').component('followers', {
        templateUrl: "./app/components/followers/followers.html",
        controllerAs: 'vm',
        controller: followersController
    });

    followersController.$inject = ['$rootScope', '$scope', 'ngDialog'];


    function followersController ($rootScope, $scope, ngDialog) {

        var vm = this;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        }

        vm.screenType = () => $rootScope.screenType;

//=========== follower popup start =================================
      vm.followerPopupOpened = false;
      vm.popupOpened = false;
      vm.openFollowerPopup = (followerObj) => {
            if (!vm.popupOpened) {
                console.log('followerObj - ');
                console.dir(followerObj);
                console.log('followerPopup');
                var followerPopup = ngDialog.open({
                    template: './app/components/followers/popupTemplates/followerPopup.html',
                    appendClassName: 'follower-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        console.log('follower controller');
                        
                        vm.followerInPopup = followerObj;
                        $scope.close = function() {
                            followerPopup.close();
                        }
                    }]
                });                
                vm.followerPopupOpened = true;
                vm.popupOpened = true;            
                followerPopup.closePromise.then(function(data) {
                    vm.followerPopupOpened = false;
                    vm.popupOpened = false;
                    console.log(data.id + ' has been dismissed.');
                    console.dir(data);
                });
            }
      }      
//=========== follower popup end =================================

        vm.followers = {
            id0: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id1: {
                name: 'David Favel',
                follows: 11,
                followers: 20,
                follow: true
            },
            id2: {
                name: 'Ostin Morakt',
                follows: 10,
                followers: 22,
                follow: false
            },
            id3: {
                name: 'Lisa Penglan',
                follows: 15,
                followers: 14,
                follow: false
            },
            id4: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id5: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: true
            },
            id6: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id7: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: true
            },
            id8: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id9: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            }
        };

        vm.count = Object.keys(vm.followers).length;

    }
})();

