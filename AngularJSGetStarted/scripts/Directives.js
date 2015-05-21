/**
 * Created by Cindy Edwards on 5/20/2015.
 */
(function() {
    var app = angular.module("controllerModule", []);

    var MainController = function($scope, $http) {
        function processGetRepositoryResponse(response) {
            $scope.repos = response.data;
        }

        function processGetUserResponse(response) {
            $scope.user = response.data;
            getRepository($scope.user.repos_url);
        }

        function onGetUserError(reason) {
            $scope.error = "Could not load user";
        }

        function onGetRepositoryError(reason) {
            $scope.error = "Could not load repository";
        }

        function getUser(userName) {
            var url = "https://api.github.com/users/" + userName;
            $http.get(url)
                .then(processGetUserResponse, onGetUserError);
        }

        function getRepository(url) {
            $http.get(url)
                .then(processGetRepositoryResponse, onGetRepositoryError);
        }

        $scope.search = getUser;

        $scope.message = "GitHub Viewer";

        $scope.userName = "angular";

        $scope.reposSortOrder = "-stargazers_count";
    }

    app.controller("MainController", MainController);
}());
