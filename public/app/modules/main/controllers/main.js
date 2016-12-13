"use strict";

angular.module('app.main').controller('mainController', function ($scope, dataService) {

    $scope.payments = [];
    $scope.paymentFormData = {};

    $scope.callback = function () {
        dataService.getPaymentsWithCallback(function (data) {
            $scope.payments = data;
        });
    };

    $scope.promise = function () {
        dataService.getPaymentsWithPromise().then(function (response) {
            $scope.payments = response.data;
        });
    };

    $scope.addPayment = function () {
        dataService.addPayment($scope.paymentFormData).then(function (response) {
            $scope.payments = response.data;
        });
    };
});