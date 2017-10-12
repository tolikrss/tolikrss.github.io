(function () {
  'use strict';
  
  angular.module('App').component('taskPhotoReport', {
    templateUrl: "./app/common/taskPhotoReport/taskPhotoReport.html",
    controllerAs: 'vm',
    controller: taskPhotoReportController
  });

    taskPhotoReportController.$inject = ['$scope', '$rootScope', '$document', '$element', '$state', '$http', 'ngDialog'];

  function taskPhotoReportController ($scope, $rootScope, $document, $element, $state, $http , ngDialog) {
      var vm = this;

        vm.messageText = "Write a message...";

        vm.screenType = () => $rootScope.screenType;

        vm.clickOnMessage = () => {
            if(vm.messageText = 'Write a message...') vm.messageText = '';
        }

        vm.sendReport = () => {
            console.dir("send button");
        }

        vm.addReportPhotoAfterPopupOpened  = false;
        vm.initCrop = false;
        vm.popupOpened = false;
        vm.files = [];
        vm.images = {
            before: {
                front: {},
                back: {},
                left: {},
                right: {}
             },
            after: {
                front: {},
                back: {},
                left: {},
                right: {}
            }            
        };

        vm.openAddPhotoBeforePopup = (side) => {
            if (!vm.popupOpened) {
                var addReportPhotoBeforePopup = ngDialog.open({
                    template: './app/common/taskPhotoReport/popupTemplates/addPhotoBeforePopup.html',
                    appendClassName: 'add-photo-before-to-photo-report-popup',
                    scope: $scope,
                    controller: ['$scope', '$timeout', function($scope, $timeout) {
                        console.log('openAddPhotoBeforePopup with side - ', side);
                        $scope.close = function() {
                            vm.myCroppedImage = {};
                            vm.myImage = {};
                            addReportPhotoBeforePopup.close();
                        };
                        $scope.savePhoto = function() {
                            vm.initCrop = true;
                            $timeout(function() {
                                vm.images['before'][side] = {
                                    imageBase64: vm.myCroppedImage.imageBase64,
                                    imageName: {
                                        name: vm.myCroppedImage.imageName.split('.')[0],
                                        type: vm.myCroppedImage.imageName.split('.')[1]
                                    }               
                                };     
                                vm.myCroppedImage = {};
                                vm.myImage = {};
                                console.log('vm.images - ');
                                console.dir(vm.images);
                                addReportPhotoBeforePopup.close();
                            });  
                        };                
                    }]
                });                
                vm.addPhotoPopupOpened = true;
                vm.popupOpened = true;            
                addReportPhotoBeforePopup.closePromise.then(function(data) {
                    vm.addReportPhotoPopupBeforeOpened = false;
                    vm.popupOpened = false;
                    vm.inputElem = angular.element(document.querySelector('#fileInput'));
                    vm.inputElem.on('change', vm.handleFileSelect);
                });
            }  
        };

        vm.openAddPhotoAfterPopup = (side) => {
            if (!vm.popupOpened) {
                var addReportPhotoAfterPopup = ngDialog.open({
                    template: './app/common/taskPhotoReport/popupTemplates/addPhotoAfterPopup.html',
                    appendClassName: 'add-photo-after-to-photo-report-popup',
                    scope: $scope,
                    controller: ['$scope', '$timeout', function($scope, $timeout) {
                        console.log('openAddPhotoAfterPopup with side - ', side);
                        $scope.close = function() {
                            vm.myCroppedImage = {};
                            vm.myImage = {};
                            addReportPhotoAfterPopup.close();
                        };
                        $scope.savePhoto = function() {
                            vm.initCrop = true;
                            $timeout(function() {
                                vm.images['after'][side] = {
                                    imageBase64: vm.myCroppedImage.imageBase64,
                                    imageName: {
                                        name: vm.myCroppedImage.imageName.split('.')[0],
                                        type: vm.myCroppedImage.imageName.split('.')[1]
                                    }
                                };     
                                vm.myCroppedImage = {};
                                vm.myImage = {};
                                console.log('vm.images - ');
                                console.dir(vm.images);
                                addReportPhotoAfterPopup.close();
                            });  
                        };                
                    }]
                });                
                vm.addPhotoPopupOpened = true;
                vm.popupOpened = true;            
                addReportPhotoAfterPopup.closePromise.then(function(data) {
                    vm.addReportPhotoPopupAfterOpened = false;
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

            vm.photoRangeMin = 0;
            vm.photoRangeMax = 0;
            vm.rangeValue = 0;
            vm.rangeStep = 0;

            vm.decRangeValue = function() {
                vm.rangeStep = (vm.photoRangeMax - vm.photoRangeMin) / 8;

                if((vm.rangeValue - vm.rangeStep) > vm.photoRangeMin) {
                    vm.rangeValue -= vm.rangeStep;
                } else {
                    vm.rangeValue = vm.photoRangeMin;
                }
            }

            vm.addRangeValue = function() {
                vm.rangeStep = (vm.photoRangeMax - vm.photoRangeMin) / 8;

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

            vm.fileRead = (evt, callbackFunc, side) => {
                var file = evt.currentTarget.files[0],
                    reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function($scope) {
                        vm.myImage.imageBase64 = evt.target.result;
                        // console.dir(file);
                        vm.myImage.imageName = file.name;
                        vm.myCroppedImage.imageName = file.name;
                        callbackFunc(side);
                    });
                };
                reader.readAsDataURL(file);
            }

            vm.onFileBeforeFront = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoBeforePopup, 'front');
            }
            vm.onFileBeforeBack = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoBeforePopup, 'back');
            }
            vm.onFileBeforeLeft = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoBeforePopup, 'left');
            }
            vm.onFileBeforeRight = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoBeforePopup, 'right');
            }

            vm.onFileAfterFront = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoAfterPopup, 'front');
            }
            vm.onFileAfterBack = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoAfterPopup, 'back');
            }
            vm.onFileAfterLeft = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoAfterPopup, 'left');
            }
            vm.onFileAfterRight = (evt) => {
                vm.fileRead(evt, vm.openAddPhotoAfterPopup, 'right');
            }
        // crop img ======================
    }
})();