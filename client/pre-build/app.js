var app = angular.module('Coup', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
   $locationProvider.html5Mode(true);
   $urlRouterProvider.otherwise('/');
});
