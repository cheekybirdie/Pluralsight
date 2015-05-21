/**
 * Created by Cindy Edwards on 5/19/2015.
 */
// create a module, named "app", which is the container for all code in Angular
var app = angular.module('app', []);

// create a controller named "main" to allow us to manipulate the page
app.controller('main', function($scope) {
    $scope.amount = 32.50;
    $scope.theDate = '4/1/2015';
    $scope.count = function() {
        return 419
    };

    $scope.handleTransfer = function() {
        alert('transfer complete');
    }
})


