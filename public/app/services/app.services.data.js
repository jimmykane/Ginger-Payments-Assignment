"use strict";

angular.module('app.services').factory('dataService', function ($http, $q) {

    var dataService = {};

    dataService.getPaymentsWithCallback = function (callbackFunction) {
        return $http({
            method: 'GET',
            url: '/payments',
            params: {
                _limit: 20,
                _sort: 'amount',
                _order: 'DESC'
            }
        }).success(function (data) {
            callbackFunction(data);
        }).error(function () {
            alert("error"); // I don't like alerts but for the test...
            return null;
        });
    };

    dataService.getPaymentsWithPromise = function () {
        return $http({
            method: 'GET',
            url: '/payments',
            params: {
                merchant: 'Ginger'
            }
        });
    };

    dataService.addPayment = function (data) {
        // Inject the status cause this should happen server side I suppose
        data.status = 'accepted';
        // Add a timestamp (should as well happen server side)
        data.created = new Date().toString();
        return $http({
            method: 'POST',
            url: '/payments',
            data: data
        });
    };

    return dataService;
});