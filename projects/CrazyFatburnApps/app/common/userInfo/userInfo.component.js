(function () {
  'use strict';
  
  angular.module('App').component('userInfo', {
    templateUrl: "./app/common/userInfo/userInfo.html",
    controllerAs: 'vm',
    bindings: {
      myWall: '<'
    },
    controller: userInfoController
  });

    userInfoController.$inject = ['$window', '$scope', '$rootScope', 'ngDialog'];

  function userInfoController ($window, $scope, $rootScope, ngDialog) {
      var vm = this;

      vm.$onInit = () => {
          console.log($rootScope.screenType);
      }

      vm.screenType = () => $rootScope.screenType;

      vm.EditingInfoMode = false;
      vm.mousehover = true;
      vm.writeCommentMode = false;
//=========== badges popup start =================================
      vm.badgesPopupOpened = false;
      vm.popupOpened = false;
      vm.carouselIndex = 0;
      vm.openBadgesPopup = (smileObj) => {
            if (!vm.popupOpened) {
                console.log('smileObj - ');
                console.dir(smileObj);
                vm.carouselIndex = vm.smiles.indexOf(smileObj);
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

      vm.smilesIds = {};

      vm.smiles = [
          {
              id: '/assets/badges/shadow/7.7x7.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur api'
          },
          {
              id: '/assets/badges/shadow/7.7x7-2.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur apg'
          },
          {
              id: '/assets/badges/shadow/7.7x7-12.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur ad'
          },
          {
              id: '/assets/badges/shadow/7.7x7-14.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur aig'
          },
          {
              id: '/assets/badges/shadow/7.7x7-11.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur adg'
          },
          {
              id: '/assets/badges/shadow/7.7x7-16.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur adg'
          },
          {
              id: '/assets/badges/shadow/7.7x7-15.png',
              descriptionTitle: 'King of pushups',
              description1: 'Ipsum dolor sit ',
              description2: 'consectetur adg'
          }
      ];

      vm.userPhotos = [
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
                  {
                      id: 0,
                      author: 'Ostin Morakt',
                      isMy: 'true',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 1,
                      date: '11 July 2018',
                      replies: [
                          {
                              id: 0,
                              author: 'Ostin Morakt',
                              isMy: 'true',
                              wasEdited: 'true',
                              content: "Open voting and men's league 2.",
                              likesCount: 1,
                              date: '11 July 2018'
                          }
                      ]
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
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
                  {
                      id: 0,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 0,
                      date: '11 July 2018'
                  },
                  {
                      id: 1,
                      author: 'Ostin Morakt',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 3,
                      date: '11 July 2018'
                  },
                  {
                      id: 2,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 1,
                      date: '11 July 2018'
                  },
                  {
                      id: 3,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 0,
                      date: '11 July 2018'
                  }
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
                  {
                      id: 0,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
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
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
                      date: '11 July 2018'
                  },
                  {
                      id: 3,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
                      date: '11 July 2018'
                  }
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
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
                      likesCount: 0,
                      date: '11 July 2018'
                  },
                  {
                      id: 3,
                      author: 'Ostin Morakt',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 0,
                      date: '11 July 2018'
                  }
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: []
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
                  {
                      id: 0,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
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
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
                      date: '11 July 2018'
                  },
                  {
                      id: 3,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 0,
                      date: '11 July 2018'
                  }
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
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
                      likesCount: 0,
                      date: '11 July 2018'
                  },
                  {
                      id: 3,
                      author: 'Ostin Morakt',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 0,
                      date: '11 July 2018'
                  }
              ]
          },
          {
              src: '/assets/img/user1.jpg',
              author: 'Ostin Morakt',
              authorImgUrl: '/assets/img/user1.jpg',
              likesCount: 2,
              date: '11 July 2018',
              comments: [
                  {
                      id: 0,
                      author: 'Ostin Morakt',
                      authorImgUrl: '/assets/img/user1.jpg',
                      wasEdited: 'true',
                      content: "Open voting and men's league 2.",
                      likesCount: 2,
                      date: '11 July 2018'
                  }
              ]
          }
      ];

      vm.commentEditingDone = function(e, comment) {
          if (e.shiftKey && e.code === "Enter") {
              return;
          } else if (e.code === "Enter") {
              comment.commentEditing = false;
              e.preventDefault();
              return false;
          }
      };

      vm.getSmileLimit = function () {
          vm.screenSize = $window.innerWidth;
          if (vm.screenSize > 1200) {
              return 4;
          } else if (vm.screenSize > 330) {
              return 3;
          }
          return 2;
      };

      vm.getPhotoLimit = function () {
          vm.screenSize = $window.innerWidth;
          if (vm.screenSize > 767) {
              return 6;
          }
          return 2;
      };

      vm.dropDown = angular.element(document.querySelector('.drop-down-more-menu'))[0];
      vm.toggleDropDown = function() {
          vm.dropDown.classList.toggle('show');
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


      //=============== GALLERY POPUP ================================================

      vm.photoClick = function (photoIndex) {
          vm.screenSize = $window.innerWidth;
          if (vm.screenSize < 1200) {
              //$window.location.sref = '#/usersPhotos({ id: photoIndex})';
              return 'usersPhotos({ id: ' + photoIndex +'})';
              // ui-sref="companyShowFreelancerProfile({ id: key})"
          } else {
              return false;
          }
      };

      vm.openGalleryPopup = function (photo, photoIndex) {
          if (!vm.popupOpened) {
              var openGalleryPopup = ngDialog.open({
                  template: './app/common/userInfo/popupTemplates/galleryImage.html',
                  appendClassName: 'gallery-photo-popup',
                  scope: $scope,
                  controller: ['$scope', function ($scope) {
                      $scope.photo = photo;
                      $scope.photoIndex = photoIndex;
                      $scope.close = function () {
                          openGalleryPopup.close();
                      };

                      $scope.clearInitialComment = function (e) {
                          console.log('vm.clearInitialComment works !');
                          if(e.innerText === 'Write a comment') {
                              e.innerText = '';
                          }
                      };
                      $scope.addInitialComment = function (e) {
                          console.log('vm.addInitialComment works !');
                          if(e.innerText = '') {
                              e.innerText = 'Write a comment';
                          }
                      };

                      vm.replies = {};

                      vm.showReply = function(id) {
                          console.log(id);
                          for (var i in vm.replies) {
                              vm.replies[i] = false;
                          }
                          vm.replies[id] = true;
                      };

                  }]
              });
              vm.uploadNewPhotoPopupOpened = true;
              vm.popupOpened = true;
              openGalleryPopup.closePromise.then(function (data) {
                  vm.uploadNewPhotoPopupOpened = false;
                  vm.popupOpened = false;
              });
          }
          console.log('openGalleryPopup already done'); //for test
      };


      //================ UPLOAD PHOTO POPUPS ==========================================

      vm.uploadNewPhotoPopupOpened = false;


      // crop image ==========================

      vm.photoRangeMin = '';
      vm.photoRangeMax = '';
      vm.rangeValue = 50;
      vm.imageCaption;

      vm.decRangeValue = function () {
          if ((vm.rangeValue - 5) > vm.photoRangeMin)
              vm.rangeValue -= 5;
      };

      vm.addRangeValue = function () {
          if ((vm.rangeValue + 5) < vm.photoRangeMax)
              vm.rangeValue += 5;
      };

      vm.uiCropperImageLoadDone = function () {
          var canvas = angular.element(document.querySelector('canvas'))[0];
          var canvasHeight = canvas.height;
          var canvasWidth = canvas.width;
          if (canvasWidth < canvasHeight) {
              vm.photoRangeMax = canvasWidth;
              vm.photoRangeMin = canvasWidth / 3;
              vm.rangeValue = canvasWidth / 2
          } else {
              vm.photoRangeMax = canvasHeight;
              vm.photoRangeMin = canvasHeight / 3;
              vm.rangeValue = canvasHeight / 2
          }
      }

      vm.onFileInputChange = function (evt) {
          vm.imagePath = evt.target.value;
          vm.imageCaption = vm.imagePath.replace(/^.*[\\\/]/, '');
          var file = evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
              $scope.$apply(function ($scope) {
                  vm.myImage = evt.target.result;
              });
          };
          reader.readAsDataURL(file);
      }
      vm.onAddImage = (evt) => {
          vm.imagePath = evt.target.value;
          vm.imageCaption = vm.imagePath.replace(/^.*[\\\/]/, '');
          var file = evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
              $scope.$apply(function ($scope) {
                  vm.myImage = evt.target.result;
              });
              vm.openUploadNewPhotoPopup();
          };
          reader.readAsDataURL(file);
      }
      vm.myImage = '';
      vm.myCroppedImage = '';

      //=====================================================================
      /*
       Upload Blob (cropped image) instead of file.
       @see
       https://developer.mozilla.org/en-US/docs/Web/API/FormData
       https://github.com/nervgh/angular-file-upload/issues/208
       */
      vm.onBeforeUploadItem = function (item) {
          alert('onBeforeUploadItem');
          var blob = vm.dataURItoBlob(item.croppedImage);
          item._file = blob;
      };
      //=============================================================
      /*
       Converts data uri to Blob. Necessary for uploading.
       @see
       http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
       @param  {String} dataURI
       @return {Blob}
       */
      vm.dataURItoBlob = function (dataURI) {
          alert('vm.dataURItoBlob');
          var binary = atob(dataURI.split(',')[1]);
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          var array = [];

          for (var i = 0; i < binary.length; i++) {
              // array.push(binary.charCodeAt(i));
          }
          return new Blob([new Uint8Array(array)], {type: mimeString});
      };
      //===================================================

      // crop img ======================

      function rotateBase64Image (base64Image, deg) {
          var canvas = document.createElement('canvas'),
              ctx = canvas.getContext('2d'),
              img = new Image();

          img.onload = function() {
              // set dimension to rotated size
              canvas.width = img.height;
              canvas.height = img.width;

              // rotate and draw source image into the canvas:
              ctx.save();
              ctx.translate(canvas.width/2, canvas.height/2);
              ctx.rotate(deg * Math.PI / 180);
              ctx.drawImage(img, -img.width/2, -img.height/2);
              ctx.restore();

              var rotatedImageSrc =  canvas.toDataURL(); // encode image to data-uri with base64

              $scope.$apply(function($scope){
                  vm.myImage = rotatedImageSrc;
              });
              return rotatedImageSrc;
          }
          img.src = base64Image;
      }
      vm.rotateRight = () => {
          rotateBase64Image(vm.myImage, 90);
      }
      vm.rotateLeft = () => {
          rotateBase64Image(vm.myImage, -90);
      }

      vm.openUploadNewPhotoPopup = function () {
          if (!vm.popupOpened) {
              var uploadNewPhotoPopup = ngDialog.open({
                  template: './app/common/userInfo/popupTemplates/uploadNewPhotoPopup.html',
                  appendClassName: 'upload-new-photo-popup',
                  scope: $scope,
                  controller: ['$scope', function ($scope) {
                      $scope.close = function () {
                          uploadNewPhotoPopup.close();
                          vm.saved = false;
                          vm.myImage = false;
                      };
                      $scope.save = function () {
                          vm.saved = true;
                      };
                  }]
              });
              vm.uploadNewPhotoPopupOpened = true;
              vm.popupOpened = true;
              uploadNewPhotoPopup.closePromise.then(function (data) {
                  vm.uploadNewPhotoPopupOpened = false;
                  vm.popupOpened = false;
                  vm.saved = false;
                  vm.myImage = false;
                  vm.imageCaption = '';
              });
          }
      };

    }

})();