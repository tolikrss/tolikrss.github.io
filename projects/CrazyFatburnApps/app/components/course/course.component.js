(function () {
    'use strict';

    angular.module('App').component('course', {
        templateUrl: "./app/components/course/course.html",
        controllerAs: 'vm',
        controller: courseController
    });

    courseController.$inject = ['$scope', '$rootScope', '$state', 'ngDialog'];

    function courseController($scope, $rootScope, $state, ngDialog) {

        var vm = this; 

        vm.$onInit = function() {
            console.log('course controller');          
            $rootScope.onComponentInit();
        };

        vm.goToTaskPage = function(item) {
            $state.go('taskPage');
        }

        vm.popupOpened = false;

        vm.openInformPopup = function() {
            if (!vm.popupOpened) {
                vm.popupOpened = true;
                var informPopup = ngDialog.open({
                    template: './app/components/course/popupTemplates/informPopup.html',
                    appendClassName: 'course-inform-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        console.log('informPopup controller');
                        $scope.close = function() {
                            informPopup.close();
                        }
                    }]
                });
                informPopup.closePromise.then(function(data) {
                    vm.popupOpened = false;
                    console.log(data.id + ' has been dismissed.');
                    console.dir(data);
                });
            }
            
            console.log('informPopup already done'); //for test
        };

        vm.items = [
            {
                type: '',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '08'
                },
                title: '#Day 8',
                text: 'Vote 2 round 5 stage. You see the time for which you perform this training and write it in the report.',
                time: '9:00 to 3:00',
                completed_task: 20,
                available: false,
                completed: false
            },
            {
                type: 'info',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '07'
                },
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: 'We have a lot to do, Friend!',
                available: false,
                completed: false
            },
            {
                type: 'info',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '06'
                },
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: 'We have a lot to do, Friend!',
                available: true,
                completed: false
            },
            {
                hasUnreadMessages: true,
                type: 'task',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '05'
                },
                title: '#Kickout Day 6',
                text: 'And I Know that YOU WILL WORK ON THE FULL COIL! ON YOUR MAXIMUM',
                time: '(code number 292)',
                completed_task: 20,
                available: true,
                completed: false
            },
            {
                type: 'task',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '04'
                },
                title: '#Day 4',
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: '9:00 to 3:00',
                completed_task: 20,
                available: true,
                completed: false
            },
            {
                type: 'task',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '03'
                },
                title: 'Kickout Day 3',
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: '9:00 to 3:00',
                completed_task: 20,
                available: true,
                completed: false
            },
            {
                type: 'info',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '02'
                },
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: '9:00 to 3:00',
                available: true,
                completed: true
            },
            //============= copy ============
            {
                type: 'info',
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '01'
                },
                text: 'I announcment the start of the new season of the most greatest massive game of the world!',
                time: '9:00 to 3:00',
                available: true,
                completed: true
            },{
                date: {
                    time: '11:30',
                    month: 'May',
                    day: '00'
                },
                text: 'Test the start of the new season of the most greatest massive game of the world!',
                time: '9:00 to 3:00',
                available: true,
                completed: true
            },
        ]; 

    }
})();

