/**
 * Created by Cindy Edwards on 5/21/2015.
 */
(function() {
    // get a reference to githubViewer; defined in app.js
    var app = angular.module("githubViewer");

    var RepositoryController = function($scope, github, $routeParams) {
        var userName = $routeParams.userName;
        var repositoryName = $routeParams.repositoryName;

        function onGetRepositoryDetailsError(reason) {
            $scope.error = reason;
        }

        function processGetRepositoryDetailsResponse(response) {
            $scope.repos = response;
            //github.getRepository($scope.user)
            //    .then(processGetRepositoryResponse, onGetRepositoryError);
        }

        $scope.userName = $routeParams.userName;
        $scope.reposSortOrder = "-stargazers_count";

        github.getRepositoryDetails(userName, repositoryName)
            .then(processGetRepositoryDetailsResponse, onGetRepositoryDetailsError);
    }


    //app.controller("MainController",
    //    ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", "github", MainController]);
    app.controller("RepositoryController", RepositoryController);
}());
