(function () {
    'use strict';
  
    angular.module('App').component('taskReport', {
        templateUrl: "./app/common/taskReport/taskReport.html",
        controllerAs: 'vm',
        controller: taskReportController
    });

    taskReportController.$inject = ['$scope', '$rootScope', '$document', '$element', '$state', '$http', 'ngDialog'];

    

    function taskReportController ($scope, $rootScope, $document, $element, $state, $http , ngDialog) {
        var vm = this;

        vm.addPhotoPopupOpened  = false;
        vm.popupOpened = false;
        vm.images = [];

        vm.openAddPhotoPopup = function() {
            if (!vm.popupOpened) {
                var addPhotoPopup = ngDialog.open({
                    template: './app/common/taskReport/popupTemplates/addPhotoPopup.html',
                    appendClassName: 'add-photo-to-report-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        $scope.close = function() {
                            vm.myCroppedImage = {};
                            vm.myImage= {};
                            addPhotoPopup.close();
                        };
                        $scope.savePhoto = function() {
                            vm.images.push({
                                imageBase64: vm.myCroppedImage.imageBase64,
                                imageName: {
                                    name: vm.myCroppedImage.imageName.split('.')[0],
                                    type: vm.myCroppedImage.imageName.split('.')[1]
                                }               
                            });           
                            vm.myCroppedImage = {};
                            vm.myImage= {};
                            addPhotoPopup.close();
                        };                
                    }]
                });                
                vm.addPhotoPopupOpened = true;
                vm.popupOpened = true;            
                addPhotoPopup.closePromise.then(function(data) {
                    vm.addPhotoPopupOpened = false;
                    vm.popupOpened = false;

                    vm.inputElem = angular.element(document.querySelector('#fileInput'));
                    vm.inputElem.on('change', vm.handleFileSelect);
                });
            }            
        };

        // crop image ==========================
            vm.myImage = {
                imageBase64: '',
                imageName: ''
            };
            vm.myCroppedImage = {
                imageBase64: '',
                imageName: ''
            };

            vm.photoRangeMin = '';
            vm.photoRangeMax = '';
            vm.rangeValue = 50;
            vm.rangeStep = 5;

            vm.decRangeValue = function() {
                if((vm.rangeValue - vm.rangeStep) > vm.photoRangeMin) {
                    vm.rangeValue -= vm.rangeStep;
                } else {
                    vm.rangeValue = vm.photoRangeMin;
                }
            }

            vm.addRangeValue = function() {
                if((vm.rangeValue + vm.rangeStep) < vm.photoRangeMax) {
                    vm.rangeValue += vm.rangeStep;
                } else {
                    vm.rangeValue = vm.photoRangeMax;
                }                
            }

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
                            vm.myImage.imageBase64 = rotatedImageSrc;
                        });
                        return rotatedImageSrc;
                    }
                    img.src = base64Image;
            }
            vm.rotateRight = function() {
                rotateBase64Image(vm.myImage.imageBase64, 90);
            }
            vm.rotateLeft = function() {
                rotateBase64Image(vm.myImage.imageBase64, -90);
            }
                    
            vm.uiCropperImageLoadDone = function() {
                var canvas = angular.element(document.querySelector('canvas'))[0],
                    canvasHeight = canvas.height,
                    canvasWidth = canvas.width;

                vm.photoRangeMax = (canvasWidth < canvasHeight) ? canvasWidth : canvasHeight;
                vm.photoRangeMin = vm.photoRangeMax / 3;
                vm.rangeValue = vm.photoRangeMax / 2;
                vm.rangeStep = (vm.photoRangeMax - vm.photoRangeMin) / 8;
            }

            vm.onFileInputChange = function(evt) {
                console.log('onFileInputChange');
                var file = evt.currentTarget.files[0],
                    reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function($scope) {
                        vm.myImage.imageBase64 = evt.target.result;
                        console.dir(file);
                        vm.myImage.imageName = file.name;
                        vm.myCroppedImage.imageName = file.name;
                        vm.openAddPhotoPopup();
                    });
                };
                reader.readAsDataURL(file);
            }
        // crop img ======================

      vm.currentUserName = "Margarite V. Eros";

      vm.currentMessageHistory = [
          {
              type: 'out',
              time: '14:54',
              text: 'Welcome to season 1. I will get rid of my fat finally. Wel to season 1. I will get rid of my fat finally. Welcome to season 1. I will get rid of my fat finally.'
          },
          {
              type: 'in',
              time: '14:54',
              text: 'Welcome to season 1. I will get rid of my fat finally.'
          },
          {
              type: 'out',
              time: '14:54',
              text: 'Welcome to season 1.'
          },
          {
              type: 'in',
              time: '14:54',
              text: 'Welcome to season 1.'
          },
          {
              type: 'out',
              time: '14:54',
              text: 'Welcome to season 1. I will get rid of my fat finally.'
          },
          {
              type: 'in',
              time: '14:54',
              text: 'Welcome to season 1. I will get rid of my fat finally.'
          }
      ];

      // vm.currentUserId = 0;
      //
      // vm.posts = {
      //     id0: {
      //         authorId: 0,
      //         name: 'Frank Sinatra',
      //         authorImgUrl: '/assets/img/user.jpg',
      //         date: '11 July',
      //         time: '14:54',
      //         smiles: [],
      //         content: "Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
      //         likesCount: 3,
      //         repliesCount: 37,
      //         replies: [
      //             {
      //                 authorId: 1,
      //                 name: 'Margarita V. Eros',
      //                 recipient: 'Frank sinatra',
      //                 content: 'What a tough day',
      //                 likesCount: 2,
      //                 date: '11 July',
      //                 time: '14:54'
      //             },
      //             {
      //                 authorId: 1,
      //                 name: 'Margarita V. Eros',
      //                 recipient: 'Frank sinatra',
      //                 content: 'What a tough day',
      //                 likesCount: 0,
      //                 date: '11 July',
      //                 time: '14:54'
      //             },
      //             {
      //                 authorId: 1,
      //                 name: 'Margarita V. Eros',
      //                 recipient: 'Frank sinatra',
      //                 content: 'What a tough day',
      //                 likesCount: 2,
      //                 date: '11 July',
      //                 time: '14:54'
      //             },
      //             {
      //                 authorId: 1,
      //                 name: 'Margarita V. Eros',
      //                 recipient: 'Frank sinatra',
      //                 content: 'What a tough day',
      //                 likesCount: 2,
      //                 date: '11 July',
      //                 time: '14:54'
      //             }
      //         ]
      //     },
      //     id1: {
      //         authorId: 1,
      //         name: 'Frank Sinatra',
      //         date: '11 July',
      //         time: '14:54',
      //         smiles: [],
      //         content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
      //         likesCount: 3,
      //         repliesCount: 37,
      //         replies: [
      //             {
      //                 authorId: 1,
      //                 name: 'Margarita V. Eros',
      //                 recipient: 'Frank sinatra',
      //                 content: 'What a tough day',
      //                 likesCount: 2,
      //                 date: '11 July',
      //                 time: '14:54'
      //             }
      //         ]
      //     },
      //     id2: {
      //         authorId: 1,
      //         name: 'Frank Sinatra',
      //         date: '11 July',
      //         time: '14:54',
      //         smiles: [],
      //         content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
      //         likesCount: 3,
      //         repliesCount: 37,
      //         replies: {}
      //     }
      // };
      //
      // vm.repliesCount = function(obj) {
      //     return Object.keys(obj).length;
      // }

    }
})();