"use strict";

angular.module('app.main').controller('mainController', function ($scope, dataService) {

    // Our 2 variables for this module's controller
    $scope.payments = [];
    $scope.paymentFormData = {};

    // The callback call
    $scope.callback = function () {
        dataService.getPaymentsWithCallback(function (data) {
            $scope.payments = data;
        });
    };

    // The promise call
    $scope.promise = function () {
        dataService.getPaymentsWithPromise().then(function (response) {
            $scope.payments = response.data;
        });
    };

    // The payment call
    $scope.addPayment = function () {
        dataService.addPayment($scope.paymentFormData).then(function (response) {
            // Reset the table
            $scope.payments = [];
            // Reset the form inputs
            $scope.paymentFormData = {};
        });
    };
});