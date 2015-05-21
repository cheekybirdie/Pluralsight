/**
 * Created by Cindy Edwards on 5/20/2015.
 */
(function() {
    // get a reference to githubViewer; defined in app.js
    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {
        function decrementCountdown() {
            $scope.countdown--;
            if ($scope.countdown == 0) {
                $scope.search($scope.userName);
            }
        }

        function getUser(userName) {
            // abort the countdown, if it exists
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }

            // use the $location service to set the URL to the userName content
            $location.path("/user/" + userName);
        }

        var countdownInterval = null;
        function startCountdown() {
            // method, milliseconds, ticks
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = getUser;
        $scope.userName = "angular";
        $scope.countdown = 5;

        startCountdown();
    }

    app.controller("MainController", MainController);
}());
