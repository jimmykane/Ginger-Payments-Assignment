"use strict";

var app = angular.module(
    'app', [
        'ngRoute',
        'app.main'
    ]
);

/**
 * Config
 */
app.config(function ($locationProvider, $routeProvider) {
    /*
     * Enabled HTML5 mode. Probably will not support
     * any browser especially < IE10
     */
    $locationProvider.html5Mode(true);

    /*
     * Routes for the mainApp
     */
    $routeProvider.when('/', {
        templateUrl: '/app/modules/main/templates/main.html',
        controller: 'mainController'
    }).otherwise({redirectTo: '/404'}); // no route
});