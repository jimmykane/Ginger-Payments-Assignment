"use strict";

angular.module('app.services').factory('dataService', function ($http, $q) {

    var dataService = {};

    // @todo add the correct params
    dataService.getData = function(limit) {
        limit = limit || 20;
        return $http({
            method: 'GET',
            url: '/payments',
            params: {
                _limit: limit,
                _sort: 'amount',
                _order: 'DESC'
            }
        }).success(function(data){
            return data;
        }).error(function(){
            alert("error");
            return null ;
        });
    };

    return dataService;

});