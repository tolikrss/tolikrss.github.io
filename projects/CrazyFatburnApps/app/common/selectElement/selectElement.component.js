(function () {
    'use strict';

    angular.module('App').component('selectElement', {
        templateUrl: "./app/common/selectElement/selectElement.html",
        controllerAs: 'vm',
        bindings: {
            items: '=',
            activeItem: '='
        },
        controller: filtersBarController
    });
    filtersBarController.$inject = ['$lang', '$document', '$element', '$timeout'];

    function filtersBarController($lang, $document, $element, $timeout) {
        var vm = this;
        vm.lang = $lang;

        vm.selectOpened = false;

        vm.select = function (newItem) {
            vm.activeItem = newItem;
        };


        vm.openSelect = function (currTarget) {
            console.log('openSelect() works!');
            
                if (angular.element(currTarget).find('ul').hasClass('hide')) {
                    vm.selectOpened = true;
                    var arrowObj = document.getElementsByClassName('icon-font-1-53'),
                        inputElem = angular.element(currTarget.firstElementChild.firstElementChild)[0]; 
                    console.dir(inputElem);
                    $timeout(function() {
                        inputElem.focus();
                    });  
                    for(var i = 0; i < arrowObj.length; i++) {
                        arrowObj[i].classList.add('icon-font-1-14');
                        arrowObj[i].classList.remove('icon-font-1-53');
                    };
                    $document.find('select-element').find('ul').addClass('hide').removeClass('watch');              //show and hide dropdown
                    angular.element(currTarget).find('ul').removeClass('hide').addClass('watch');
                    let arrow_span = angular.element(currTarget).find('span');         //switch arrow down to up
                    if(arrow_span.hasClass('icon-font-1-14')){
                        arrow_span.removeClass('icon-font-1-14').addClass('icon-font-1-53');    //end switch arrow down to up
                    }
                } else {
                    vm.selectOpened = false;
                    $document.find('select-element').find('ul').addClass('hide').removeClass('watch');          //hide dropdown
                    var arrowArr = document.getElementsByClassName('icon-font-1-53');    //switch arrow down to up
                    arrowArr[0].classList.add('icon-font-1-14');
                    arrowArr[0].classList.remove('icon-font-1-53');          //end switch arrow down to up
                }
            
            
        };

        angular.element($document).bind('click', function (e) {
            if ( e.target.parentNode && e.target.parentNode.parentNode && !($element[0].localName == e.target.parentNode.className || $element[0].localName == e.target.parentNode.parentNode.className) ) {
                vm.selectOpened = false;
                $document.find('select-element').find('ul').addClass('hide').removeClass('watch');  
                var arrowArr = document.getElementsByClassName('icon-font-1-53');
                for(var i = 0; i < arrowArr.length; i++) {
                    arrowArr[i].classList.add('icon-font-1-14');
                    arrowArr[i].classList.remove('icon-font-1-53');
                };
            }
        });
        // $document.on('click', function (e) {
        //     if ( e.target.parentNode && e.target.parentNode.parentNode && !($element[0].localName == e.target.parentNode.className || $element[0].localName == e.target.parentNode.parentNode.className) ) {
        //         vm.selectOpened = false;
        //         $document.find('select-element').find('ul').addClass('hide').removeClass('watch');  
        //         var arrowArr = document.getElementsByClassName('icon-font-1-53');
        //         for(var i = 0; i < arrowArr.length; i++) {
        //             arrowArr[i].classList.add('icon-font-1-14');
        //             arrowArr[i].classList.remove('icon-font-1-53');
        //         };
        //     }
        // });
    }
})();
