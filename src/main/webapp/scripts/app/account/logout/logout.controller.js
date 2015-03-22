'use strict';

angular.module('residencegallieniApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
