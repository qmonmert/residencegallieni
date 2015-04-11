/**
 * Created by Quentin on 06/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('photos', {
                parent: 'site',
                url: '/photos',
                data: {
                    pageTitle: 'photos.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/photos/photos.html'
                        //controller: 'ApartmentsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('photos');
                        return $translate.refresh();
                    }]
                }
            });
    });
