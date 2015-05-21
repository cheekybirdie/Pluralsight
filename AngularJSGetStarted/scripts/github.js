/**
 * Created by Cindy Edwards on 5/20/2015.
 */
/**
 * Created by Cindy Edwards on 5/20/2015.
 */
(function() {

    var github = function($http) {
        function getRepository(user) {
            return $http.get(user.repos_url)
                .then(returnResponseData);
        }

        function getUser(userName) {
            var url = "https://api.github.com/users/" + userName;

            return $http.get(url)
                .then(returnResponseData);
        }

        function returnResponseData(response) {
            return response.data;
        }

        return {
            getRepository: getRepository,
            getUser: getUser
        }
    };


    // register the service with angular
    // get a reference to the githubViewer module defined in Services.js
    var githubViewerModule = angular.module("githubViewer");
    githubViewerModule.factory("github", github);

/*
    var MainController = function($scope, $http, $interval, $log, $anchorScroll, $location) {
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
            var url = "https://api.github.com/users/" + userName;
            $http.get(url)
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
            $scope.user = response.data;
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

//    app.controller("MainController", ["$scope", "$http", "$interval","$log", MainController]);
    app.controller("MainController", MainController);
    */
}());
