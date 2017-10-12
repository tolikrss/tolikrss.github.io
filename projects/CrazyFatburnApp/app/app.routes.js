/*
 Main app module config
 created by Oza / 14-12-2016
 */

(function(window, angular) {
    'use strict';

    angular.module('App')
        .config([
            '$stateProvider',
            '$locationProvider',
            '$urlRouterProvider',
            function($stateProvider, $locationProvider, $urlRouterProvider) {

                $urlRouterProvider.when('/', '/wall');
                
                var states = [
                    {
                        name: 'emptyTemplate',
                        url: '/emptyTemplate',
                        component: 'emptyTemplate'
                    },
                    {
                        name: 'emptyTemplate2',
                        url: '/emptyTemplate2',
                        component: 'emptyTemplate2'
                    },
                    {
                        name: 'wall',
                        url: '/wall',
                        component: 'wall'
                    },
                    {
                        name: 'settings',
                        url: '/settings',
                        component: 'settings'
                    },
                    {
                        name: 'course',
                        url: '/course',
                        component: 'course'
                    },
                    {
                        name: 'kitchen',
                        url: '/kitchen',
                        component: 'kitchen'
                    },
                    {
                        name: 'vote',
                        url: '/vote',
                        component: 'vote'
                    },
                    {
                        name: 'myBody',
                        url: '/myBody',
                        component: 'myBody'
                    },
                    {
                        name: 'user',
                        url: '/user/{id:string}',
                        component: 'user',
                        resolve: {                            
                            userId: ['$stateParams', function($stateParams) {
                                return $stateParams.id;
                            }]
                        }
                    },
                    {
                        name: 'followers',
                        url: '/myWall/followers',
                        component: 'followers'
                    },
                    {
                        name: 'party',
                        url: '/party',
                        component: 'party'
                    },
                    {
                        name: 'messages',
                        url: '/messages',
                        component: 'messages'
                    },
                    {
                        name: 'taskPage',
                        url: '/taskPage',
                        component: 'taskPage'
                    },
                    {
                        name: 'usersPhotos',
                        url: '/usersPhotos/{id:string}',
                        component: 'usersPhotos',
                        resolve: {
                            activeAnchor: ['$stateParams', function($stateParams) {
                                return $stateParams.id;
                            }]
                        }
                    },
                    {
                        name: 'photoCommentsMobile',
                        url: '/photoCommentsMobile',
                        component: 'photoCommentsMobile'
                    }
                ];


                // Loop over the state definitions and register them
                states.forEach(function(state) {
                    $stateProvider.state(state);
                });

                // Default route
                $urlRouterProvider.otherwise("/");

                // Set hashbang prefix
                $locationProvider.hashPrefix('');

            }
        ]);
})(window, window.angular);