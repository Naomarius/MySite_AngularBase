/**
* Main AngularJS Web Application
*/
var app = angular.module('wootapp', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider

// Home
.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})

/* etc… routes to other pages… */
.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
//.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
.when("/forums", {templateUrl: "partials/forums.html", controller: "PageCtrl"})
.when("/stream", {templateUrl: "partials/stream.html", controller: "PageCtrl"})
.when("/events", {templateUrl: "partials/events.html", controller: "PageCtrl"})
.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
.when("/blogaddedit", {templateUrl: "partials/blogaddedit.html", controller: "PageCtrl"})

// else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
* Controls the Blog
*/
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
//console.log("Blog Controller reporting for duty.");
});

/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
//console.log("Page Controller reporting for duty.");
});