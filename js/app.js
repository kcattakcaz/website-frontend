/**
 * Created by zach on 12/6/15.
 */

var mSite = angular.module('mSiteModule', ['ngRoute','ngAnimate']);

mSite.controller('HomeController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

mSite.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'HomeController',
        })
        .when('/doc_resume',{
            templateUrl: 'partials/resume.html',
            controller: 'HomeController',
        })
    $locationProvider.html5Mode(false);
});

mSite.controller('ResumeController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});