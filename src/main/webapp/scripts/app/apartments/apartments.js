/**
 * Created by Quentin on 04/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('apartments', {
                parent: 'site',
                url: '/apartments',
                data: {
                    pageTitle: 'apartments.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/apartments/apartments.html',
                        controller: 'ApartmentsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('apartments');
                        return $translate.refresh();
                    }]
                }
            });
    });
