(function () {
    'use strict';

    angular.module('App').component('emptyTemplate', {
        templateUrl: "./app/components/emptyTemplate/emptyTemplate.html",
        controllerAs: 'vm',
        controller: emptyTemplateController
    });

    emptyTemplateController.$inject = ['$scope', '$http', '$rootScope', 'FileUploader', 'transport'];


    function emptyTemplateController ($scope, $http, $rootScope, FileUploader, transport) {
        $scope.testWidth = 0;
        var vm = this;
        vm.testText = 'One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and ';
        vm.response = 'before response';

        vm.testFocus = () => {
            var el = angular.element(document.querySelector('.test-focus'))[0];
            el.focus();
            console.dir(el);
        }

        vm.screenType = function() {
            return $rootScope.screenType;
        }

        vm.testRequest = () => {
            var fd = new FormData();
            fd.append('email', 'test@test.com');
            fd.append('password', 'test1234');
            console.dir(fd);
            // $http({
            //     method: 'POST',
            //     url: 'http://localhost:8001/api/auth/api-token-auth/',
            //     data: fd
            // }).then((response) => {
            //     console.log('response success');
            //     console.dir(response);
            // }, (response) => {
            //     console.log('response error');
            //     console.dir(response);
            // });
            transport
                .go('api/auth/api-token-auth/', fd)
                // .then(loadData.success, loadData.error)
                .then(function(data) {
                    vm.currPaginationPage++;
                    vm.versionsData.versions = vm.versionsData.versions.concat(data.versions);
                    vm.versionsData.is_more = data.is_more;
                })
                .catch(function(err) {});
        };
        vm.test = vm.testRequest();
        

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        }
  
//=================================================================================
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
       vm.onFileInputChange = (evt) => {
                console.log('onFileInputChange');
                var file = evt.currentTarget.files[0],
                    reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function($scope){
                        $scope.myImage = evt.target.result;
                    });
                };
                reader.readAsDataURL(file);
        }

        $scope.myImage='';
        $scope.myCroppedImage='';
        $scope.$watch('myImage', function() {
            // alert($scope.myImage);
        });

    }
})();

