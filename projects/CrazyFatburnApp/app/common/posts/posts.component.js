(function () {
  'use strict';
  
    angular.module('App').component('posts', {
        templateUrl: "./app/common/posts/posts.html",
        controllerAs: 'vm',
        controller: postsController
    });

    postsController.$inject = [];

    

  function postsController () {
      var vm = this;
      vm.postEditing = false;
      vm.replies = {};

      vm.showReply = function(id) {
          for (var i in vm.replies) {
              vm.replies[i] = false;
          }
          vm.replies[id] = true;
      };

      vm.clearInitialComment = function (e) {
        if(e.innerText === 'Write a comment') {
            e.innerText = '';
        }
      };
      vm.addInitialComment = function (e) {
        if(e.innerText = '') {
            e.innerText = 'Write a comment';
        }
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

      vm.repliesCount = function(obj) {
          return Object.keys(obj).length;
      };

      vm.posts = {
          id0: {
              authorId: 0,
              name: 'Frank Sinatra',
              authorImgUrl: '/assets/img/user.jpg',
              date: '11 July',
              time: '14:54',
              smiles: [],
              content: "Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
              likesCount: 3,
              repliesCount: 37,
              replies: [
                  {
                      replyId: 0,
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54',
                      authorImgUrl: '/assets/img/user1.jpg'
                  },
                  {
                      replyId: 1,
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 0,
                      date: '11 July',
                      time: '14:54',
                      authorImgUrl: '/assets/img/user1.jpg'
                  },
                  {
                      replyId: 2,
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54',
                      authorImgUrl: '/assets/img/user1.jpg'
                  },
                  {
                      replyId: 3,
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54',
                      authorImgUrl: '/assets/img/user1.jpg'
                  }
              ]
          },
          id1: {
              authorId: 1,
              name: 'Frank Sinatra',
              authorImgUrl: '/assets/img/user.jpg',
              date: '11 July',
              time: '14:54',
              smiles: [],
              content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
              likesCount: 3,
              repliesCount: 37,
              replies: [
                  {
                      replyId: 0,
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54',
                      authorImgUrl: '/assets/img/user1.jpg'
                  }
              ]
          },
          id2: {
              authorId: 1,
              name: 'Frank Sinatra',
              authorImgUrl: '/assets/img/user.jpg',
              date: '11 July',
              time: '14:54',
              smiles: [],
              content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
              likesCount: 3,
              repliesCount: 37,
              replies: {}
          }
      };
    }
})();