(function () {
    'use strict';

    angular.module('App').component('selectElementDefault', {
        templateUrl: "./app/common/selectElementDefault/selectElement.html",
        controllerAs: 'vm',
        bindings: {
            items: '=',
            activeItem: '='
        },
        controller: filtersBarController
    });
    filtersBarController.$inject = ['$lang', '$document', '$element'];

    function filtersBarController($lang, $document, $element) {
        var vm = this;
        vm.lang = $lang;

        vm.select = function (newItem) {
            vm.activeItem = newItem;
        };


        vm.openSelect = function () {
            console.log('openSelect() works!');
            if (angular.element(event.currentTarget).find('ul').hasClass('hide')) {
                var arrowObj = document.getElementsByClassName('icon-font-1-53'); 
                for(var i = 0; i < arrowObj.length; i++) {
                    arrowObj[i].classList.add('icon-font-1-14');
                    arrowObj[i].classList.remove('icon-font-1-53');
                };
                $document.find('select-element').find('ul').addClass('hide').removeClass('watch');              //show and hide dropdown
                angular.element(event.currentTarget).find('ul').removeClass('hide').addClass('watch');
                let arrow_span = angular.element(event.currentTarget).find('span');         //switch arrow down to up
                if(arrow_span.hasClass('icon-font-1-14')){
                    arrow_span.removeClass('icon-font-1-14').addClass('icon-font-1-53');    //end switch arrow down to up
                }
            } else {
                $document.find('select-element').find('ul').addClass('hide').removeClass('watch');          //hide dropdown
                var arrowArr = document.getElementsByClassName('icon-font-1-53');    //switch arrow down to up
                arrowArr[0].classList.add('icon-font-1-14');
                arrowArr[0].classList.remove('icon-font-1-53');          //end switch arrow down to up
            }
        };

        $document.on('click', function (e) {
            if ( e.target.parentNode && e.target.parentNode.parentNode && !($element[0].localName == e.target.parentNode.className || $element[0].localName == e.target.parentNode.parentNode.className) ) {
                $document.find('select-element').find('ul').addClass('hide').removeClass('watch');  
                var arrowArr = document.getElementsByClassName('icon-font-1-53');
                for(var i = 0; i < arrowArr.length; i++) {
                    arrowArr[i].classList.add('icon-font-1-14');
                    arrowArr[i].classList.remove('icon-font-1-53');
                };
            }
        });
    }
})();
