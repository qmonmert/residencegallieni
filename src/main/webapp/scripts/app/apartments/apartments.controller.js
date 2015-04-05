'use strict';

angular.module('residencegallieniApp')
    .controller('ApartmentsController', function ($scope, $location) {

        $scope.goApartment = function(id) {
            $location.path("/apartment/" + id);
        }

    });
