/**
 * Created by Cindy Edwards on 5/20/2015.
 */
(function() {
    // get a reference to githubViewer; defined in app.js
    var app = angular.module("githubViewer");

    var UserController = function($scope, github, $routeParams) {
        function onGetUserError(reason) {
            $scope.error = "Could not load user";
        }

        function onGetRepositoryError(reason) {
            $scope.error = "Could not load repository";
        }

        function processGetRepositoryResponse(response) {
            $scope.repos = response;
        }

        function processGetUserResponse(response) {
            $scope.user = response;
            github.getRepository($scope.user)
                .then(processGetRepositoryResponse, onGetRepositoryError);
        }

        $scope.userName = $routeParams.userName;
        $scope.reposSortOrder = "-stargazers_count";

        github.getUser($scope.userName)
            .then(processGetUserResponse, onGetUserError);
    }


    //app.controller("MainController",
    //    ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", "github", MainController]);
    app.controller("UserController", UserController);
}());
