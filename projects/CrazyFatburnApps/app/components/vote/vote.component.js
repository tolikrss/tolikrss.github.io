(function () {
    'use strict';

    angular.module('App').component('vote', {
        templateUrl: "./app/components/vote/vote.html",
        controllerAs: 'vm',
        controller: voteController
    });

    voteController.$inject = ['$scope', '$rootScope', '$state', 'ngDialog'];

    function voteController($scope, $rootScope, $state, ngDialog) {

        var vm = this;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        }

        vm.popupOpened = false;

        vm.slideIndex = 1;
        vm.likesQuantity = 0;
        vm.neededLikes = 3;
        vm.slides = [
                { 
                    image: 'http://poxudeem.ru/uploads/posts/2013-02/1360840113_image047.jpg',
                    league: 'girls',
                    vote: 'like'
                },
                { 
                    image: 'http://zabaka.ru/upload/2016/03/pohidevshie-devushki/pohidevshie-devushki_00.jpg' ,
                    league: 'girls'
                },
                { 
                    image: 'http://beauty-bio.com/uploads/posts/1704/dietu-9.jpg' ,
                    league: 'boys',
                    vote: 'not-like'
                },
                { 
                    image: 'http://zabaka.ru/upload/2016/03/pohidevshie-devushki/pohidevshie-devushki_00.jpg' ,
                    league: 'girls'
                },
                { 
                    image: 'http://beauty-bio.com/uploads/posts/1704/dietu-9.jpg' ,
                    league: 'boys'
                },
                { 
                    image: 'http://zabaka.ru/upload/2016/03/pohidevshie-devushki/pohidevshie-devushki_00.jpg' ,
                    league: 'girls'
                },
                { 
                    image: 'http://beauty-bio.com/uploads/posts/1704/dietu-9.jpg' ,
                    league: 'boys'
                }
        ];
        
        vm.nextSlide = function() {
            var total = vm.slides.length;
            if (total > 0) {
                vm.slideIndex = (vm.slideIndex == total - 1) ? 0 : vm.slideIndex + 1;
            }
            // console.log(vm.slideIndex);
        };
        vm.previousSlide = function() {
            var total = vm.slides.length;
            if (total > 0) {
                vm.slideIndex = (vm.slideIndex == 0) ? total - 1 : vm.slideIndex - 1 ;
            }
            // console.log(vm.slideIndex);
        };

        vm.like = function(elem) {
            elem.vote = 'like';
            vm.likesQuantity++;
            vm.nextSlide();
        }
        vm.notLike = function(elem) {
            elem.vote = 'not-like';
            vm.likesQuantity++;
            vm.nextSlide();
        }

        vm.getLeagueClassName = function(league) {
            var className;
            switch (league) {
			  case 'family': className="family-league"; break;
			  case 'girls': className="girls-league"; break;
			  case 'boys': className="boys-league"; break;
			};
            return className;
        };
        

        vm.openThanksForVotingPopup = function() {
            if (!vm.popupOpened) {
                vm.popupOpened = true;
                var thanksForVotingPopup = ngDialog.open({
                    template: './app/components/vote/popupTemplates/thanksForVotingPopup.html',
                    appendClassName: 'thanks-for-voting-popup',
                    scope: $scope,
                    controller: ['$scope', function($scope) {
                        console.log('thanksForVotingPopup controller');
                        $scope.close = function() {
                            thanksForVotingPopup.close();
                        }
                    }]
                });
                thanksForVotingPopup.closePromise.then(function(data) {
                    vm.popupOpened = false;
                    console.dir($state);
                    $state.go('wall');
                    console.log(data.id + ' has been dismissed.');
                    console.dir(data);
                });
            }

            console.log('thanksForVotingPopup already done'); //for test
        };
    }
})();

