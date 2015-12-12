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
        .when('/about',{
            templateUrl: 'partials/about.html',
            controller: 'AboutController',
        })
        .when('/projects',{
            templateUrl: 'partials/projects.html',
            controller: 'ProjectsController'
        })
        .when('/project/:projID',{
            templateUrl: 'partials/project.html',
            controller: 'ProjectsController',
        })
        .when('/blog',{
            templateUrl: 'partials/blog.html',
            controller: 'BlogController'
        })
        .when('/blog/:postID',{
            templateUrl: 'partials/post.html',
            controller: 'BlogPostController'
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
    $scope.$parent.view_nav_href = "#/";
    $scope.projects_list= [
        {name:'mi491app',text:'Android IM App',tech:'Java / Android'},
        {name:'mi349site',text:'Personal Website',tech:'Angular.js / Ruby-on-Rails'},
        {name: 'studymore',text:'Study More for Pebble',tech:'C / Laravel'},
        {name: 'supertftp',text:'SuperTFTP',tech:'C++ / Qt'},
        {name: 'sorteria',text:'Sorteria',tech:'Java / Android'}
        ];
});
mSite.controller('BlogController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_title = "Blog";
    $scope.$parent.view_nav_icon = "fa fa-arrow-left fa-3x";
    $scope.$parent.show_view_nav_icon = true;
    $scope.$parent.view_heading_visible = true;
    $scope.$parent.view_nav_href = "#/";
    $scope.blog_list= [
        {name:'201512110001',date:'12/11/15',title:'Leaving Wordpress'},

    ];
});
mSite.controller('BlogPostController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_nav_icon = "fa fa-arrow-left fa-3x";
    $scope.$parent.show_view_nav_icon = true;
    $scope.$parent.view_heading_visible = true;
    $scope.$parent.view_nav_href = "#/blog";

    $scope.post_data = {title:"Leaving Wordpress",text:"After two years, it's time to let go of Wordpress.  I'm creating my site from scratch now using Angular.js and Bootstrap for the frontend and soon Ruby-on-Rails for the backend." +
    "this is an Angular.js template, that is being filled with information from JSON.  I don't have the sever-side stuff sorted out yet, but I will work on it" +
    "over the break, probably in Ruby-on-Rails or Node.js.  Seriously, go checkout partials/post.html, you won't find any of this text in there!"}

    $scope.$parent.view_title = $scope.post_data.title;
});

mSite.controller('AboutController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$parent.view_nav_icon = "fa fa-arrow-left fa-3x";
    $scope.$parent.show_view_nav_icon = true;
    $scope.$parent.view_heading_visible = true;
    $scope.$parent.view_nav_href = "#/";
    $scope.$parent.view_title = "About Me";
});