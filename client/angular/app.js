var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/front.html'
        })

        .when('/home',{
            templateUrl: 'partials/home.html'
        })

        .when('/profile',{
            templateUrl: 'partials/profile.html'
        })


        .when('/add/:id',{
            templateUrl: 'partials/add.html'
        })

        .when('/leaderboard/:id',{
            templateUrl: 'partials/leaderboard.html'
        })



        .otherwise({
          redirectTo: '/home'
        });
    });
