"use strict";

angular.module('app.main').controller('mainController', function ($scope, dataService) {

    $scope.payments = [];

    $scope.callback = function () {
        dataService.getPayments().then(function(response) {
            console.log(response);
            angular.extend($scope.payments, response.data);
        });
    };
});