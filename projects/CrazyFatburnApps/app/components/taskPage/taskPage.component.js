(function () {
    'use strict';

    angular.module('App').component('taskPage', {
        templateUrl: "./app/components/taskPage/taskPage.html",
        controllerAs: 'vm',
        controller: taskPageController
    });

    taskPageController.$inject = ['$scope', '$rootScope','$window', '$timeout', 'ngAudio'];


    function taskPageController ($scope, $rootScope, $window, $timeout, ngAudio) {

        var vm = this;
        vm.$onInit = function() {            
            $rootScope.onComponentInit();
            console.log('vm.sound -');
            console.dir(vm.sound);
        }

        vm.$onDestroy = function() {
            vm.sound.stop();
            vm.sound = null;
            // console.dir(vm.sound);
            // console.log('destroy taskPage');
        }

        vm.mouseOver = false;
        vm.mouseLeave = false;

        vm.toSmall = function(e) {
            console.log('toSmall');
            vm.mouseOver = false;
            $timeout.cancel(vm.promise);
            if(vm.isScreenDesktop() && !vm.mouseLeave) {
                vm.mouseLeave = true;
                e.classList.add('small-2');
                $timeout(function() {
                    e.classList.add('small-1');
                    var block = document.getElementById('large-block');
                    block.classList.remove('with-open-menu');
                }, 100);
            }
        };



        vm.fromSmall = function(e) {
            console.log('fromSmall');
            vm.mouseLeave = false;
            if(vm.isScreenDesktop() && !vm.mouseOver) {
                vm.mouseOver = true;
                e.classList.remove('small-1');

                vm.promise = $timeout(function() {
                    var block = document.getElementById('large-block');
                    block.classList.add('with-open-menu');
                    e.classList.remove('small-2');
                }, 400);
            }
        };


        vm.sound = ngAudio.load("./music/m83_midnight_city.mp3"); // returns NgAudioObject
        vm.progress = 0;
        vm.progressBar = angular.element(document.querySelector('#sound-progress-bar'));

        vm.changeProgress = function() {
            vm.sound.progress = vm.progress;
        };

        vm.progressChanged = function(e) {
            console.log('change');
        };

        vm.isScreenDesktop = function() {
            return $window.innerWidth > 1199;
        };

        vm.screenSize = $window.innerWidth;

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

