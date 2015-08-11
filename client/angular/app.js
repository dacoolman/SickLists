var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/front.html'
        })

        .when('/home',{
            templateUrl: 'partials/home.html'
        })

        .when('/profile/:id',{
            templateUrl: 'partials/profile.html'
        })


        .when('/add/:id',{
            templateUrl: 'partials/add.html'
        })

        .when('/leaderboard/:id',{
            templateUrl: 'partials/leaderboard.html'
        })
           .when('/leaderboard_all',{
            templateUrl: 'partials/leaderboard_all.html'
        })



        .otherwise({
          redirectTo: '/home'
        });
    });
