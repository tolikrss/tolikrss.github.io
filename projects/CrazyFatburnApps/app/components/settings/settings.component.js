(function () {
    'use strict';

    angular.module('App').component('settings', {
        templateUrl: "./app/components/settings/settings.html",
        controllerAs: 'vm',
        controller: settingsController
    });

    settingsController.$inject = ['$scope', '$rootScope', '$document', '$element', '$state', '$http', 'ngDialog'];

    function settingsController($scope, $rootScope, $document, $element, $state, $http , ngDialog) {

        var vm = this;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
            vm.openConfirmEmailNotificationPopup();
        }

        vm.screenType = function() {
            return $rootScope.screenType;
        }

        vm.changeSexPopupOpened  = false;        
        vm.confirmEmailPopupOpened  = false;
        vm.changePhotoPopupOpened  = false;
        vm.confirmEmailNotificationPopupOpened = false;
        vm.popupOpened = false;

        

        // crop image ==========================
            vm.myImage='';
            vm.myCroppedImage='';

            vm.photoRangeMin = '';
            vm.photoRangeMax = '';
            vm.rangeValue = 50;
            vm.rangeStep = 5;

            vm.decRangeValue = () => {
                if((vm.rangeValue - vm.rangeStep) > vm.photoRangeMin) {
                    vm.rangeValue -= vm.rangeStep;
                } else {
                    vm.rangeValue = vm.photoRangeMin;
                }
            }

            vm.addRangeValue = () => {
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
                    
            vm.uiCropperImageLoadDone = () => {
                var canvas = angular.element(document.querySelector('canvas'))[0],
                    canvasHeight = canvas.height,
                    canvasWidth = canvas.width;

                vm.photoRangeMax = (canvasWidth < canvasHeight) ? canvasWidth : canvasHeight;
                vm.photoRangeMin = vm.photoRangeMax / 3;
                vm.rangeValue = vm.photoRangeMax / 2;
                vm.rangeStep = (vm.photoRangeMax - vm.photoRangeMin) / 8;
            }

            vm.onFileInputChange = (evt) => {
                console.log('onFileInputChange');
                var file = evt.currentTarget.files[0],
                    reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function($scope){
                        vm.myImage = evt.target.result;
                    });
                    vm.openChangePhotoPopup();
                };
                reader.readAsDataURL(file);
            }

                //=====================================================================
                        /*
                        Upload Blob (cropped image) instead of file.
                        @see
                            https://developer.mozilla.org/en-US/docs/Web/API/FormData
                            https://github.com/nervgh/angular-file-upload/issues/208
                        */
                        vm.onBeforeUploadItem = function(item) {
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
                        vm.dataURItoBlob = function(dataURI) {
                            alert('vm.dataURItoBlob');
                            var binary = atob(dataURI.split(',')[1]);
                            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                            var array = [];
                            
                            for(var i = 0; i < binary.length; i++) {
                                // array.push(binary.charCodeAt(i));
                            }
                            return new Blob([new Uint8Array(array)], {type: mimeString});
                        };
                //===================================================
        
        // crop img ======================

        vm.user = {
            showMyLastName: true,
            showMyNickName: false,
            sex: 'male',
            codesList: ['+380', '+340'],
            selectedCode: '+380',            
            daysList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            selectedDay: 12,            
            monthList: ['April', 'May', 'June', 'July'],
            selectedMonth: 'May',
            yearList: ['1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'],
            selectedYear: 1985
        }

        vm.changeShowStatus = (e) => {
            vm.user[e] = !vm.user[e];
        }

        vm.changeShowPasswordIco = (e) => {
            if(!!e.firstElementChild && e.firstElementChild.classList.contains('show')) {
                e.firstElementChild.classList.remove('show');
            } else if(e.firstElementChild) {
                e.firstElementChild.classList.add('show');
            }
            else {
                e.classList.remove('show');
            }            
        }

        vm.openChangeSexPopup = (userSex) => {
            if (!vm.popupOpened) {
                var changeSexPopup = ngDialog.open({
                    template: './app/components/settings/popupTemplates/changeSexPopup.html',
                    appendClassName: 'change-sex-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        $scope.changeSex = function() {
                            vm.user.sex = userSex;
                            changeSexPopup.close();
                        }
                        $scope.close = function() {
                            changeSexPopup.close();
                        }
                    }]
                });
                $scope.$emit('popupOpeningStart');
                vm.changeSexPopupOpened = true;
                vm.popupOpened = true;            
                changeSexPopup.closePromise.then(function(data) {
                    vm.changeSexPopupOpened = false;
                    vm.popupOpened = false;
                });
            }            
        };

        vm.openConfirmEmailPopup = () => {
            if (!vm.popupOpened) {
                var confirmEmailPopup = ngDialog.open({
                    template: './app/components/settings/popupTemplates/confirmEmailPopup.html',
                    appendClassName: 'confirm-email-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        $scope.close = function() {
                            confirmEmailPopup.close();
                        }
                    }]
                });                
                vm.confirmEmailPopupOpened = true;
                vm.popupOpened = true;            
                confirmEmailPopup.closePromise.then(function(data) {
                    vm.confirmEmailPopupOpened = false;
                    vm.popupOpened = false;
                });
            }            
        };

        vm.openConfirmEmailNotificationPopup = () => {
            if (!vm.popupOpened) {
                var confirmEmailNotificationPopup = ngDialog.open({
                    template: './app/components/settings/popupTemplates/confirmEmailNotificationPopup.html',
                    appendClassName: 'confirm-email-notification-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        $scope.close = function() {
                            confirmEmailNotificationPopup.close();
                        }
                    }]
                });                
                vm.confirmEmailNotificationPopupOpened = true;
                vm.popupOpened = true;            
                confirmEmailNotificationPopup.closePromise.then(function(data) {
                    vm.confirmEmailNotificationPopupOpened = false;
                    vm.popupOpened = false;
                });
            }            
        };

        vm.openChangePhotoPopup = () => {
            if (!vm.popupOpened) {
                var changePhotoPopup = ngDialog.open({
                    template: './app/components/settings/popupTemplates/changePhotoPopup.html',
                    appendClassName: 'change-photo-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        $scope.close = function() {
                            changePhotoPopup.close();
                        }                 
                    }]
                });                
                vm.changePhotoPopupOpened = true;
                vm.popupOpened = true;            
                changePhotoPopup.closePromise.then(function(data) {
                    vm.changePhotoPopupOpened = false;
                    vm.popupOpened = false;

                    vm.inputElem = angular.element(document.querySelector('#fileInput'));
                    vm.inputElem.on('change', vm.handleFileSelect);
                });
            }            
        };
    }
})();

