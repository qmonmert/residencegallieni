'use strict';

angular.module('residencegallieniApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


