(function () {
    'use strict';
  
    angular.module('App').component('chat', {
        templateUrl: "./app/common/chat/chat.html",
        controllerAs: 'vm',
        controller: chatController
    });


    chatController.$inject = [];

    function chatController () {
      var vm = this;

      vm.currentUserId = 0;

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
                      replyId: '0',
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54'
                  },
                  {
                      replyId: '1',
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 0,
                      date: '11 July',
                      time: '14:54'
                  },
                  {
                      replyId: '2',
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54'
                  },
                  {
                      replyId: '3',
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54'
                  }
              ]
          },
          id1: {
              authorId: 1,
              name: 'Frank Sinatra',
              date: '11 July',
              time: '14:54',
              smiles: [],
              content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
              likesCount: 3,
              repliesCount: 37,
              replies: [
                  {
                      replyId: '0',
                      authorId: 1,
                      name: 'Margarita V. Eros',
                      recipient: 'Frank sinatra',
                      content: 'What a tough day',
                      likesCount: 2,
                      date: '11 July',
                      time: '14:54'
                  }
              ]
          },
          id2: {
              authorId: 1,
              name: 'Frank Sinatra',
              date: '11 July',
              time: '14:54',
              smiles: [],
              content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
              likesCount: 3,
              repliesCount: 37,
              replies: {}
          }
      };

      vm.repliesCount = function(obj) {
          return Object.keys(obj).length;
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


  }
})();