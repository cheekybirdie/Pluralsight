/**
 * Created by Cindy Edwards on 5/18/2015.
 */
    // create a module, named "app", which is the container for all code in Angular
var app = angular.module('app', []);

// create a controller named "main" to allow us to manipulate the page
app.controller('main', function($scope) {
    $scope.message = "Hello World";
})