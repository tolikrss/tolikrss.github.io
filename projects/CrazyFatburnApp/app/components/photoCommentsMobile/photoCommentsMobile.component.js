(function () {
    'use strict';

    angular.module('App').component('photoCommentsMobile', {
        templateUrl: "./app/components/photoCommentsMobile/photoCommentsMobile.html",
        controllerAs: 'vm',
        controller: photoCommentsMobileController
    });

    photoCommentsMobileController.$inject = ['$scope', '$rootScope'];

    function photoCommentsMobileController($scope, $rootScope) {

        var vm = this;
        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        };

        vm.clearInitialComment = function (e) {
            if(e.innerText === 'Write a comment') {
                e.innerText = '';
                e.focus();
                console.log(e);
            }
        };
        vm.addInitialComment = function (e) {
            if(e.innerText = '') {
                e.innerText = 'Write a comment';
            }
        };

        vm.replies = {};

        vm.showReply = function(id) {
            for (var i in vm.replies) {
                vm.replies[i] = false;
            }
            vm.replies[id] = true;
        };

        vm.contentEditingDone = function(e, post) {
            if (e.shiftKey && e.code === "Enter") {
                return;
            } else if (e.code === "Enter") {
                post.contentEditing = false;
                e.preventDefault();
                return false;
            }
        };


        vm.writeComment = function() {
            vm.writeCommentMode = true;
            // vm.commentInputs = document.getElementsByClassName('new-reply-input');
            // vm.input = angular.element(vm.commentInputs[vm.commentInputs.length-1]);
            // console.log(vm.input);
            // vm.input.focus();
            // vm.input.select();
            // vm.input.innerText = '';
            // vm.input.trigger('focus');
        };

        vm.comments = [
            {
                id: 0,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 1,
                date: '11 July 2018'
            },
            {
                id: 1,
                author: 'Ostin Morakt',
                authorImgUrl: '/assets/img/user1.jpg',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 2,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 3,
                date: '11 July 2018'
            },
            {
                id: 3,
                author: 'Ostin Morakt',
                authorImgUrl: '/assets/img/user1.jpg',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 5,
                date: '11 July 2018'
            },
            {
                id: 4,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 5,
                author: 'Ostin Morakt',
                authorImgUrl: '/assets/img/user1.jpg',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 6,
                date: '11 July 2018'
            },
            {
                id: 6,
                author: 'Ostin Morakt',
                authorImgUrl: '/assets/img/user1.jpg',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 7,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 7,
                date: '11 July 2018'
            },
            {
                id: 8,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 9,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 7,
                date: '11 July 2018'
            },
            {
                id: 10,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 11,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 2,
                date: '11 July 2018'
            },
            {
                id: 12,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 0,
                date: '11 July 2018'
            },
            {
                id: 13,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 1,
                date: '11 July 2018'
            },
            {
                id: 14,
                author: 'Ostin Morakt',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 2,
                date: '11 July 2018'
            },
            {
                id: 15,
                author: 'Ostin Morakt',
                authorImgUrl: '/assets/img/user1.jpg',
                wasEdited: 'true',
                content: "Open voting and men's league 2.",
                likesCount: 2,
                date: '11 July 2018'
            }
        ];

    }
})();

