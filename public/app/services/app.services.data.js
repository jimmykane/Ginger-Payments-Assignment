"use strict";

angular.module('app.services').factory('dataService', function ($http, $q) {

    var dataService = {};

    dataService.getPaymentsWithCallback = function(callbackFunction) {
        return $http({
            method: 'GET',
            url: '/payments',
            params: {
                _limit: 20,
                _sort: 'amount',
                _order: 'DESC'
            }
        }).success(function(response){
            callbackFunction(response);
        }).error(function(){
            alert("error"); // I don't like alerts but for the test...
            return null ;
        });
    };
    return dataService;
});