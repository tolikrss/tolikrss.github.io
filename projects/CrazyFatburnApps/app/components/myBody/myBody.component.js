(function () {
    'use strict';

    angular.module('App').component('myBody', {
        templateUrl: "./app/components/myBody/myBody.html",
        controllerAs: 'vm',
        controller: myBodyController
    });

    myBodyController.$inject = ['$scope', '$rootScope'];

    function myBodyController($scope, $rootScope) {

        var vm = this;

        vm.isCanAddNewData = true;

        vm.$onInit = function() {            
            $rootScope.onComponentInit();            
            vm.ticksArrayFunc();
        }

        vm.contentEditingDone = function(e, elem) {
            console.log('contentEditingDone - ');
            console.dir(e);
            if (e.shiftKey && e.code === "Enter") {
                return;
            } else if (e.keyCode == 13) {            
                e.preventDefault();
                return false;
            }
        };

        vm.screenType = function() {
            return $rootScope.screenType;
        }

        vm.deleteElem = function(index) {
            vm.weightTableData.splice(index, 1);
            vm.isCanAddNewData = true;
        };

        vm.getMonthStr = function(int) {
            var fMonth = '';
            switch (int) {
			  case 0: fMonth="January"; break;
			  case 1: fMonth="February"; break;
			  case 2: fMonth="March"; break;
			  case 3: fMonth="April"; break;
			  case 4: fMonth="May"; break;
			  case 5: fMonth="June"; break;
			  case 6: fMonth="July"; break;
			  case 7: fMonth="August"; break;
			  case 8: fMonth="September"; break;
			  case 9: fMonth="October"; break;
			  case 10: fMonth="November"; break;
			  case 11: fMonth="December"; break;
			};

            return fMonth;
        };

        vm.addWeightData = () => {
          console.log('vm.addWeightData() worked');
            vm.isCanAddNewData = false;
            let currentDate = new Date(),
                year = '' + currentDate.getFullYear(),
                month =  currentDate.getMonth() + 1,
                monthString =  (month.toString().length === 1) ? ( "0" + month) : month;

            vm.weightTableData[vm.weightTableData.length] = {
                date: currentDate.getDate() + '.' + monthString + '.' + year.split('').splice(2,2).join(''),
                // weight: 0,
                // chest: 0,
                // waist: 0,
                // hips: 0,
                // hipGirth: 0
            }
        };
        
        vm.weightTableData = [
            {
                date: '22.01.17',
                weight: 95,
                chest: 90,
                waist: 60,
                hips: 90,
                hipGirth: 57
            },
            {
                date: '23.01.17',
                weight: 94,
                chest: 90,
                waist: 60,
                hips: 90,
                hipGirth: 57
            },
            {
                date: '24.01.17',
                weight: 93,
                chest: 88,
                waist: 61,
                hips: 90,
                hipGirth: 57
            },
            {
                date: '25.01.17',
                weight: 92,
                chest: 86,
                waist: 62,
                hips: 90,
                hipGirth: 57,
                diference: {                    
                    weight: -1,
                    chest: -2,
                    waist: 1,
                    hips: 0,
                    hipGirth: 0,
                }
            }
        ];

        
        vm.data = function() {
            if(vm.screenType() === 'mobile') {
                        return {
                            weight: [
                                {x: new Date("2015-04-16"), y: 90},
                                {x: new Date("2015-04-17"), y: 95},
                                {x: new Date("2015-04-18"), y: 86},
                                {x: new Date("2015-04-19"), y: 89},
                                {x: new Date("2015-04-20"), y: 69},
                            ],
                            chest: [
                                {x: new Date("2015-04-16"), y: 80},
                                {x: new Date("2015-04-17"), y: 80},
                                {x: new Date("2015-04-18"), y: 90},
                                {x: new Date("2015-04-19"), y: 70},
                                {x: new Date("2015-04-20"), y: 65},
                            ],
                            waist: [
                                {x: new Date("2015-04-16"), y: 100},
                                {x: new Date("2015-04-17"), y: 85},
                                {x: new Date("2015-04-18"), y: 75},
                                {x: new Date("2015-04-19"), y: 65},
                                {x: new Date("2015-04-20"), y: 60},
                            ],
                            hips: [
                                {x: new Date("2015-04-16"), y: 70},
                                {x: new Date("2015-04-17"), y: 85},
                                {x: new Date("2015-04-18"), y: 95},
                                {x: new Date("2015-04-19"), y: 79},
                                {x: new Date("2015-04-20"), y: 70},
                            ],
                            hipGirth: [
                                {x: new Date("2015-04-16"), y: 60},
                                {x: new Date("2015-04-17"), y: 85},
                                {x: new Date("2015-04-18"), y: 105},
                                {x: new Date("2015-04-19"), y: 85},
                                {x: new Date("2015-04-20"), y: 75},
                            ]
                        };
            }
            return {
                weight: [
                    {x: new Date("2015-04-15"), y: 80}, 
                    {x: new Date("2015-04-16"), y: 90},
                    {x: new Date("2015-04-17"), y: 95},
                    {x: new Date("2015-04-18"), y: 86},
                    {x: new Date("2015-04-19"), y: 89},
                    {x: new Date("2015-04-20"), y: 69},
                ],
                chest: [
                    {x: new Date("2015-04-15"), y: 90}, 
                    {x: new Date("2015-04-16"), y: 80},
                    {x: new Date("2015-04-17"), y: 80},
                    {x: new Date("2015-04-18"), y: 90},
                    {x: new Date("2015-04-19"), y: 70},
                    {x: new Date("2015-04-20"), y: 65},
                ],
                waist: [
                    {x: new Date("2015-04-15"), y: 70}, 
                    {x: new Date("2015-04-16"), y: 100},
                    {x: new Date("2015-04-17"), y: 85},
                    {x: new Date("2015-04-18"), y: 75},
                    {x: new Date("2015-04-19"), y: 65},
                    {x: new Date("2015-04-20"), y: 60},
                ],
                hips: [
                    {x: new Date("2015-04-15"), y: 100}, 
                    {x: new Date("2015-04-16"), y: 70},
                    {x: new Date("2015-04-17"), y: 85},
                    {x: new Date("2015-04-18"), y: 95},
                    {x: new Date("2015-04-19"), y: 79},
                    {x: new Date("2015-04-20"), y: 70},
                ],
                hipGirth: [
                    {x: new Date("2015-04-15"), y: 75}, 
                    {x: new Date("2015-04-16"), y: 60},
                    {x: new Date("2015-04-17"), y: 85},
                    {x: new Date("2015-04-18"), y: 105},
                    {x: new Date("2015-04-19"), y: 85},
                    {x: new Date("2015-04-20"), y: 75},
                ]
            };
        }();

          vm.options = {
            margin: {
                top: 20,
                bottom: 30,
                right: function() {
                    // if(vm.screenType() === 'mobile') {
                    //     return 25;
                    // }
                    return 0;
                }(),
                left: function() {
                    if(vm.screenType() === 'mobile') {
                        return 30;
                    }
                    return 40;
                }(),
            },
            grid: {
                x: true,
                y: false
            },
            series: [
              {                
                axis: "y",
                dataset: "weight",
                key: "y",
                label: "Weight",
                color: "#ff4081",
                type: ['line' /* , 'area' */ ],
                interpolation: {mode: "cardinal", tension: 0.7},
                id: 'mySeries0'
              },
              {                
                axis: "y",
                dataset: "chest",
                key: "y",
                label: "Chest",
                color: "#5e3bea",
                type: ['line' /* , 'area' */ ],
                interpolation: {mode: "cardinal", tension: 0.7},
                id: 'mySeries1'
              },
              {                
                axis: "y",
                dataset: "waist",
                key: "y",
                label: "Waist",
                color: "#eebb08",
                type: ['line' /* , 'area' */ ],
                interpolation: {mode: "cardinal", tension: 0.7},
                id: 'mySeries2'
              },
              {                
                axis: "y",
                dataset: "hips",
                key: "y",
                label: "Hips",
                color: "#7dc335",
                type: ['line' /* , 'area' */ ],
                interpolation: {mode: "cardinal", tension: 0.7},
                id: 'mySeries3'
              },
              {                
                axis: "y",
                dataset: "hipGirth",
                key: "y",
                label: "Hip girth",
                color: "#a1a7be",
                type: ['line' /* , 'area' */ ],
                interpolation: {mode: "cardinal", tension: 0.7},
                id: 'mySeries4'
              }
            ],
            axes: {
                x: {
                    key: "x", 
                    type: "date",
                    tickFormat: (date) => {
                        let month =  date.getMonth() + 1,
                            monthString =  (month.toString().length === 1) ? ( "0" + month) : month,
                            cos = new Date("2015-04-20");
                        if(date.getDate() == cos.getDate()) {
                            return '';
                        } ;
                        return date.getDate() + '.' + monthString + '.' + date.getFullYear(); //vm.getMonthStr(date.getMonth())
                    },
                    ticks: vm.data.weight.length,
                    ticksShift: {
                        x: 10
                    }
                }, 
                y: {                 
                    padding: {max: 20},
                    ticks:  vm.data.weight.length + 1,
                    // tickFormat: function(weight) {
                    //     return weight - (weight % 5);
                    // }
                },
                y2: {
                    min: 0,
                    max: 0
                }
            }
        };
        vm.ticksArrayFunc = function() {
            var max = 0,
                min = 0,
                ticksArr = [];

            for(var key in vm.data) {
                if(!min) min = vm.data[key][0].y;
                for(var i = 0; i < vm.data[key].length; i++) {
                    if(vm.data[key][i].y > max) {
                        max = vm.data[key][i].y;
                    } else if (vm.data[key][i].y < min) {
                        min = vm.data[key][i].y;
                    }
                }
            };
            console.dir(min);
            console.dir(max);
        }
    }
})();

