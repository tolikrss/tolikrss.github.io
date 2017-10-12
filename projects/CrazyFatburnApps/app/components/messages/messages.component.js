(function () {
    'use strict';

    angular.module('App').component('messages', {
        templateUrl: "./app/components/messages/messages.html",
        controllerAs: 'vm',
        controller: messagesController
    });  

    messagesController.$inject = ['$rootScope', '$document', '$element', '$window', '$scope'];


    function messagesController($rootScope, $document, $element, $window, $scope) {

        var vm = this;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();
        }
        
        vm.isScreenMobile = () => $rootScope.screenType === 'mobile';
        vm.findDialog = '';

        vm.findInputChanged = function() {
            // console.log('find - ', vm.findDialog );
        }

        vm.findFilter = function (dialog) { 
            if(vm.findDialog) {
                var regV = `${vm.findDialog}`;
                var regex = new RegExp(regV, "i");
                return (dialog.name.match(regex)) ? true : false;
            } 
            return true; 
        };        

        vm.openMobileMenu = function() {
          var navBar  = angular.element(document.querySelector('.column-navbar'))[0],
              content = angular.element(document.querySelector('.column-content'))[0],
              navbar  = angular.element(document.querySelector('.large-navbar-block'))[0];

          navBar.classList.toggle('open');
          content.classList.toggle('mobile-menu-opened');
          content.setAttribute("style", `height: ${navbar.clientHeight}px; overflow: hidden;`);
      }

        vm.toggleChatList = function() {
            if(vm.isScreenMobile()) {
                var navBar = angular.element(document.querySelector('.left-panel'))[0];
                navBar.classList.toggle('show');        
            }               
        }

        vm.addNewMessage = function(messageText) {
            var newMessage = {
                type: 'out',
                time: '14:54',
                text: messageText
            };
            vm.currentMessageHistory.push(newMessage);
            vm.newMessage = '';
        };

        vm.onFileInputChange = function(evt) {
            console.log('onFileInputChange in messages');
            var file = evt.currentTarget.files[0],
                reader = new FileReader();
            reader.onload = function (evt) {
                $scope.$apply(function($scope){
                    vm.myImage = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };

        vm.dialogs = {
            id0: {
                name: 'Margarita V. Eros',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: 1,
                messageHistory: [
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
                ]
            },
            id1: {
                name: 'David Favel',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: false,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rid of my fat finally Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'I will get rid of my fat finally Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            },
            id2: {
                name: 'Ostin Morakt',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: false,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rid of my fat finally Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            },
            id3: {
                name: 'Lisa Penglan',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: 16,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'will get ridwill get ridwill get ridwill get ridWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            },
            id4: {
                name: 'Margarita V. Eros',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: false,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            },
            id5: {
                name: 'Lisa Penglan',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: 16,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'will get ridwill get ridwill get ridwill get ridWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            },
            id6: {
                name: 'Margarita V. Eros',
                time: '08:20',
                message: 'Open voting and mens league lkjlkjliewoiuroploplo',
                newMessages: false,
                messageHistory: [
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'out',
                        time: '14:54',
                        text: 'I will get rI will get rI will get rI will get rWelcome to season 1. I will get rid of my fat finally.'
                    },
                    {
                        type: 'in',
                        time: '14:54',
                        text: 'Welcome to season 1. I will get rid of my fat finally.'
                    }
                ]
            }
        };
    }
})();

