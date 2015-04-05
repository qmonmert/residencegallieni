/**
 * Created by Quentin on 04/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('info', {
                parent: 'site',
                url: '/info',
                data: {
                    //roles: ['ROLE_ADMIN'],
                    pageTitle: 'info.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/info/info.html'
                        //controller: 'MetricsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('info');
                        return $translate.refresh();
                    }]
                }
            });
    });
