"use strict";

angular.module('app.main').controller('mainController', function ($scope, dataService) {

    $scope.payments = [];

    $scope.callback = function () {
        dataService.getPaymentsWithCallback(function (data) {
            console.log(data);
            //angular.extend($scope.payments, response);
            $scope.payments = data;
        });
    };

    $scope.promise = function () {
        dataService.getPaymentsWithPromise().then(function(response) {
            console.log(response);
            $scope.payments = response.data;
        });
    }
});