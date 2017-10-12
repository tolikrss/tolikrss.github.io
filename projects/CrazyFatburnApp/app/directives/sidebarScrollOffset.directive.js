/*
 Show evaluation stars directive
 created by Oza / 29-12-2016
 */

(function () {
  'use strict';

  angular.module('App').directive('sidebarScrollOffset', [
    '$document',
    '$window',
    '$timeout',
    function ($document, $window, $timeout) {
      return {
        restrict: 'AE',
        scope: {
        },
        link: function (scope, element, attr) {

          var topPanelOffset = 80;  // height of top panel at sidebar column
          var pageScrollPrev = 0;
          var sidebarOffset = 0;
          // console.log('initial correct value: ' + element[0].clientHeight);
          var sidebarOffsetMax = element[0].clientHeight - $document[0].documentElement.clientHeight + topPanelOffset;

          // Prevent usage of incorrect initial 'element[0].clientHeight' value
          $timeout(function() {
            element.ready(function () {
              // console.log('initial ready value: ' + element[0].clientHeight);

              // Initial calculation for correct offset at screen resize from tablet to desktop
              onResize();
              onScroll();

              angular.element($window).bind('resize', onResize);
              $document.on('scroll', onScroll);
              scope.$on('$destroy', cleanUp);
              scope.$watch(function() {
                return element[0].clientHeight;
              }, function(newValue, oldValue) {
                // console.log(newValue);
                onResize();
              });

            });
          });

          // Recalculate screen size
          function onResize() {

            var sidebarOffsetMaxCurr = element[0].clientHeight - $document[0].documentElement.clientHeight + topPanelOffset;

            if (sidebarOffsetMaxCurr < 0) {
              element.removeClass('fixed-top');
              element.removeClass('fixed-bottom');
              element.css('margin-top', 0);
              sidebarOffset = 0;
              sidebarOffsetMax = sidebarOffsetMaxCurr;
              return;
            }

            if (sidebarOffsetMaxCurr > sidebarOffsetMax && element.hasClass('fixed-bottom')) {
              sidebarOffset += sidebarOffsetMaxCurr - sidebarOffsetMax;
            }

            sidebarOffsetMax = sidebarOffsetMaxCurr;

            if (sidebarOffset > sidebarOffsetMax) {
              sidebarOffset = sidebarOffsetMax;

              element.removeClass('fixed-top');

              element.addClass('fixed-bottom');
              element.css('margin-top', 0);

            }

            // console.log('resize: max offset: ' + sidebarOffsetMax);
            // console.log('resize: offset: ' + sidebarOffset);
          }

          // Calculate offset after scroll (margin-top and 'fixed-top', 'fixed-bottom' classes)
          function onScroll() {

            var pageScroll = $window.pageYOffset || $document[0].documentElement.scrollTop;
            var currScrollValue = pageScroll - pageScrollPrev;
            pageScrollPrev = pageScroll;

            if (sidebarOffsetMax < 0) {
              return;
            }

            // Down page scroll
            if (currScrollValue > 0) {

              if (sidebarOffset < sidebarOffsetMax) {
                sidebarOffset += currScrollValue;

                if (sidebarOffset > sidebarOffsetMax) {
                  sidebarOffset = sidebarOffsetMax;
                }
              }

              element.removeClass('fixed-top');

              if (sidebarOffset === sidebarOffsetMax) {
                element.addClass('fixed-bottom');
                element.css('margin-top', 0);
              }
              else {
                element.removeClass('fixed-bottom');
                element.css('margin-top', -(sidebarOffset) + 'px');
              }
            }

            // Up page scroll
            if (currScrollValue < 0) {

              if (sidebarOffset > 0) {
                sidebarOffset += currScrollValue;

                if (sidebarOffset < 0) {
                  sidebarOffset = 0;
                }
              }

              element.removeClass('fixed-bottom');

              if (sidebarOffset === 0) {
                element.addClass('fixed-top');
                element.css('margin-top', 0);
              }
              else {
                element.removeClass('fixed-top');
                element.css('margin-top', -(sidebarOffset) + 'px');
              }

            }

            // console.log('Sidebar offset: ' + sidebarOffset);
            // console.log('pageScrollPrev: ' + pageScrollPrev);
          }

          // Removes events at directive destroy
          function cleanUp() {
            angular.element($window).off('resize', onResize);
            $document.off('scroll', onScroll);
          }

        }
      }
    }])
})();
