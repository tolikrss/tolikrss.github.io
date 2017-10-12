(function () {
  'use strict';
  
  angular.module('App').component('partyPosts', {
    templateUrl: "./app/common/partyPosts/partyPosts.html",
    controllerAs: 'vm',
    bindings: {
       posts: '<'
    },
    controller: partyPostsController
  });

    partyPostsController.$inject = ['$scope', 'ngDialog'];

  function partyPostsController ($scope, ngDialog) {
      var vm = this;

      vm.currentUserId = 0;
      vm.replies = {};

      vm.showReply = function(id) {
          for (var i in vm.replies) {
              vm.replies[i] = false;
          }
          vm.replies[id] = true;
      };

      vm.clearInitialComment = function (e) {
        if(e.innerText === 'Write a comment') e.innerText = '';
      };

      vm.repliesCount = function(obj) {
          return Object.keys(obj).length;
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

      //=========== badges popup start =================================
      vm.badgesPopupOpened = false;
      vm.popupOpened = false;
      vm.carouselIndex = 0;
      vm.openBadgesPopup = (smileObj, smiles) => {
          if (!vm.popupOpened) {
              console.log('smileObj - ');
              console.dir(smileObj);
              vm.carouselIndex = smiles.indexOf(smileObj);
              vm.smiles = smiles;
              console.log('badgesPopup');
              var badgesPopup = ngDialog.open({
                  template: './app/common/userInfo/popupTemplates/badgesPopup.html',
                  appendClassName: 'badges-popup',
                  scope: $scope,
                  controller: ['$scope', function($scope) {
                      console.log('badges controller');
                      $scope.close = function() {
                          badgesPopup.close();
                      }
                  }]
              });
              vm.badgesPopupOpened = true;
              vm.popupOpened = true;
              badgesPopup.closePromise.then(function(data) {
                  vm.badgesPopupOpened = false;
                  vm.popupOpened = false;
              });
          }
      }
    //=========== badges popup end =================================

    }
})();