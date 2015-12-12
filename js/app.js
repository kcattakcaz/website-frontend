/**
 * Created by zach on 12/6/15.
 */

var mSite = angular.module('mSiteModule', ['ngRoute','ngAnimate']);



mSite.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'IndexController',
        })
        .when('/doc_resume',{
            templateUrl: 'partials/resume.html',
            controller: 'ResumeController',
        })
        .when('/projects',{
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsController',
        })
    $locationProvider.html5Mode(false);
});

mSite.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.view_title = "";
    $scope.view_nav_icon = "";
    $scope.show_view_nav_icon = false;
    $scope.view_heading_visible = false;
    $scope.view_nav_href = "#/";
});
mSite.controller('ResumeController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_title = "Resume";
    $scope.$parent.view_nav_icon = "fa fa-arrow-left fa-3x";
    $scope.$parent.show_view_nav_icon = true;
    $scope.$parent.view_heading_visible = true;
    $scope.$parent.view_nav_href = "#/";
});
mSite.controller('IndexController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_title = "Index";
    $scope.$parent.show_view_nav_icon = false;
    $scope.$parent.view_heading_visible = false;
    $scope.navlinks= [{name:'doc_resume',text:'Resume',icon:'nav_link_icon fa fa-file-text-o fa-5x'},
    {name:'projects',text:'Projects',icon:'nav_link_icon fa fa-file-code-o fa-5x'},
    {name:'blog',text:'Blog',icon:'nav_link_icon fa fa-newspaper-o fa-5x'},
    {name:'intr_resume',text:'Interactive Resume',icon:'nav_link_icon fa fa-hand-pointer-o fa-5x'},
    {name:'about',text:'About',icon:'nav_link_icon fa fa-user fa-5x'},
    {name:'contact',text:'Contact',icon:'nav_link_icon fa fa-envelope-o fa-5x'}];
});
mSite.controller('ProjectsController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_title = "Projects";
    $scope.$parent.view_nav_icon = "fa fa-arrow-left fa-3x";
    $scope.$parent.show_view_nav_icon = true;
    $scope.$parent.view_heading_visible = true;
    $scope.projects_list= [
        {name:'mi491app',text:'Android IM App',tech:'Java / Android'},
        {name:'mi349site',text:'Personal Website',tech:'Angular.js / Ruby-on-Rails'},
        {name: 'studymore',text:'Study More for Pebble',tech:'C / Laravel'},
        {name: 'supertftp',text:'SuperTFTP',tech:'C++ / Qt'},
        {name: 'sorteria',text:'Sorteria',tech:'Java / Android'}
        ];
});