(function () {
    'use strict';

    angular.module('App').component('party', {
        templateUrl: "./app/components/party/party.html",
        controllerAs: 'vm',
        controller: followers
    });

    followers.$inject = ['$rootScope'];


    function followers ($rootScope) {

        var vm = this;
        vm.showAll = true;
        vm.showFavourites = false;
        vm.showSearch = false;

        vm.searchResult = 0;
        // 0 - start
        // 1 - nothing found
        // 2 - founded list

        vm.searchResults = [
            {
                imageSrc: '',
                name: 'Frank Sinatra',
                iFollow: true,
                followsMe: true
            },
            {
                imageSrc: '',
                name: 'Frank Sinatra',
                iFollow: false,
                followsMe: true
            },
            {
                imageSrc: '',
                name: 'Frank Sinatra',
                iFollow: true,
                followsMe: false
            }
        ];





        vm.$onInit = function() {
            $rootScope.onComponentInit();
        };

        vm.clearInitialShare = function(e) {
            if(e.innerText === "Frank Sinatra") e.innerText = '';
        };

        vm.clearShare = function() {
            if(vm.shareContent === "Frank Sinatra") {
                vm.shareContent = '';
            }
        };

        vm.fillShare = function() {
            if(vm.shareContent === "") {
                vm.shareContent = 'Frank Sinatra';
            }
        };

        vm.contentEditingDone = function(e) {
            console.log(e);
            if (e.shiftKey && e.code === "Enter") {
                return;
            } else if (e.code === "Enter") {
                //send vm.shareContent
                vm.shareContent = "Frank Sinatra";
                e.preventDefault();
                var activeElement = document.activeElement;
                if (activeElement) {
                    activeElement.blur();
                }
                return false;
            }
        };

        vm.allPosts = {
            id0: {
                authorId: 0,
                name: 'Frank Sinatra',
                authorImgUrl: '/assets/img/user.jpg',
                date: '11 July',
                time: '14:54',
                smiles: [
                    {
                        id: '/assets/badges/shadow/7.7x7.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur api'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-2.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur apg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-12.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur ad'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-14.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur aig'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-11.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-16.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-15.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    }
                ],
                content: "Many of the clubs in then",
                likesCount: 3,
                repliesCount: 37,
                iFollow: false,
                // followsMe: true,
                replies: [
                    {
                        replyId: 0,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 1,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 0,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 2,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 3,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    }
                ]
            },
            id1: {
                authorId: 1,
                name: 'Frank Sinatra',
                date: '11 July',
                time: '14:54',
                smiles: [
                    {
                        id: '/assets/badges/shadow/7.7x7.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur api'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-2.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur apg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-12.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur ad'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-14.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur aig'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-11.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-16.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-15.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    }
                ],
                content: "One claim about the benefits s and information is a hallmark of our association's reputation.",
                likesCount: 3,
                repliesCount: 37,
                iFollow: true,
                // followsMe: true,
                replies: [
                    {
                        replyId: 0,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    }
                ]
            },
            id2: {
                authorId: 1,
                name: 'Frank Sinatra',
                date: '11 July',
                time: '14:54',
                smiles: [
                    {
                        id: '/assets/badges/shadow/7.7x7.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur api'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-2.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur apg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-12.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur ad'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-14.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur aig'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-11.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-16.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-15.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    }
                ],
                content: "One claim about the benefits of foam rolling is that it initiates an increase in blood flow to the treated area. But do those claims hold water?. Many of the clubs in the Network have been in business for more than 35 years now, so there is an incredible wealth of knowledge and experience among our group of owners and managers. Networking is a key benefit of membership in FitLife and a willingness to share ideas and information is a hallmark of our association's reputation.",
                likesCount: 3,
                repliesCount: 37,
                iFollow: true,
                // followsMe: false,
                replies: {}
            }
        };

        vm.posts = vm.allPosts;

        vm.favourites = {
            id0: {
                authorId: 0,
                name: 'Frank Sinatra',
                authorImgUrl: '/assets/img/user.jpg',
                date: '11 July',
                time: '14:54',
                smiles: [
                    {
                        id: '/assets/badges/shadow/7.7x7.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur api'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-2.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur apg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-12.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur ad'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-14.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur aig'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-11.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-16.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-15.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    }
                ],
                content: "Many of the clubs in then",
                likesCount: 3,
                repliesCount: 37,
                iFollow: false,
                followsMe: true,
                replies: [
                    {
                        replyId: 0,
                        authorId: 1,
                        name: 'Marg',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 1,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 0,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 2,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    },
                    {
                        replyId: 3,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    }
                ]
            },
            id1: {
                authorId: 1,
                name: 'Frank Sinatra',
                date: '11 July',
                time: '14:54',
                smiles: [
                    {
                        id: '/assets/badges/shadow/7.7x7.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur api'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-2.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur apg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-12.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur ad'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-14.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur aig'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-11.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-16.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    },
                    {
                        id: '/assets/badges/shadow/7.7x7-15.png',
                        descriptionTitle: 'King of pushups',
                        description1: 'Ipsum dolor sit ',
                        description2: 'consectetur adg'
                    }
                ],
                content: "One claim about the benefits s and information is a hallmark of our association's reputation.",
                likesCount: 3,
                repliesCount: 37,
                iFollow: true,
                followsMe: true,
                replies: [
                    {
                        replyId: 0,
                        authorId: 1,
                        name: 'Margarita V. Eros',
                        recipient: 'Frank sinatra',
                        content: 'What a tough day',
                        likesCount: 2,
                        date: '11 July',
                        time: '14:54'
                    }
                ]
            }
        };

        vm.getAllPosts = function() {
            vm.showAll = true;
            vm.showFavourites = false;
            vm.showSearch = false;
            vm.posts = vm.allPosts;
        };

        vm.getFavourites = function() {
            vm.showAll = false;
            vm.showFavourites = true;
            vm.showSearch = false;
            vm.posts = vm.favourites;
        };

        vm.search = function() {
            vm.showAll = false;
            vm.showFavourites = false;
            vm.showSearch = true;
            vm.posts = vm.favourites;
        };

        vm.clearInitialSearch = function (e) {
            if (e.innerText === 'Name') {
                e.innerText = '';
            }
        };

        vm.followers = {
            id0: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id1: {
                name: 'David Favel',
                follows: 11,
                followers: 20,
                follow: true
            },
            id2: {
                name: 'Ostin Morakt',
                follows: 10,
                followers: 22,
                follow: false
            },
            id3: {
                name: 'Lisa Penglan',
                follows: 15,
                followers: 14,
                follow: false
            },
            id4: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id5: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: true
            },
            id6: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id7: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: true
            },
            id8: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            },
            id9: {
                name: 'Margarita V. Eros',
                follows: 10,
                followers: 16,
                follow: false
            }
        };

        vm.count = Object.keys(vm.followers).length;

    }
})();

