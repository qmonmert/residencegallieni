/**
 * Created by Quentin on 05/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('apartment', {
                parent: 'site',
                url: '/apartment/:apartmentId',
                data: {
                    pageTitle: 'apartment.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/apartment/apartment.html',
                        controller: 'ApartmentController'
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



