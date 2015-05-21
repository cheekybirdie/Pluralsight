/**
 * Created by Cindy Edwards on 5/20/2015.
 */
(function() {
    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http, $interval, $log, $anchorScroll, $location, github) {
        function decrementCountdown() {
            if ($scope.countdown < 1) {
                return;
            }

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

            $log.info("searching for " + userName);
            /*var url = "https://api.github.com/users/" + userName;
            $http.get(url)
                .then(processGetUserResponse, onGetUserError);*/
            github.getUser(userName)
                .then(processGetUserResponse, onGetUserError);
        }

        function getRepository(url) {
            $http.get(url)
                .then(processGetRepositoryResponse, onGetRepositoryError);
        }

        function onGetUserError(reason) {
            $scope.error = "Could not load user";
        }

        function onGetRepositoryError(reason) {
            $scope.error = "Could not load repository";
        }

        function processGetRepositoryResponse(response) {
            $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        }

        function processGetUserResponse(response) {
            $scope.user = response;
            //$scope.user = response.data;
            getRepository($scope.user.repos_url);
        }

        var countdownInterval = null;
        function startCountdown() {
            // method, milliseconds, ticks
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = getUser;
        $scope.message = "GitHub Viewer";
        $scope.userName = "angular";
        $scope.reposSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountdown();

    }


    //app.controller("MainController",
    //    ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", "github", MainController]);
    app.controller("MainController", MainController);
}());
