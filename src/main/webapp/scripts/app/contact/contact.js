/**
 * Created by Quentin on 06/04/15.
 */

'use strict';

angular.module('residencegallieniApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                parent: 'site',
                url: '/contact',
                data: {
                    pageTitle: 'contact.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/contact/contact.html'
                        //controller: 'ApartmentsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('contact');
                        return $translate.refresh();
                    }]
                }
            });
    });

