(function() {
    var app = angular.module("controllerModule", []);

    var person = {
        firstName: "Rich",
        lastName: "Edwards",
        imageSource: "http://odetocode.com/Images/scott_allen_2.jpg"
    };

    var MainController = function($scope, $http) {
        function processResponse(response) {
            $scope.user = response.data;
        }

        function onError(reason) {
            $scope.error = "Could not load user";
        }

        //$http.get("https://api.github.com/users/odetocode")
        $http.get("https://api.github.com/users/robconery")
            .then(processResponse, onError);

        $scope.message = "Hello Angular Controller!";
        $scope.person = person;
    }

    app.controller("MainController", MainController);

    // an example accounting for minification concerns
    // app.controller("MainController", ["$scope", "$http", MainController);
}());
