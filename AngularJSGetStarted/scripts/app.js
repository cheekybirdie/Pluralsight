(function() {
    // define githubViewer module indicating dependency on ngRoute module
    // in order to make $routeProvider available
    var app = angular.module("githubViewer", ["ngRoute"]);


    function configureRoutes($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:userName", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:userName/:repositoryName", {
                templateUrl: "repository.html",
                controller: "RepositoryController"
            })
            .otherwise({redirectTo:"/main"})
    }

    // use app.config to configure routes
    app.config(configureRoutes);
}());
