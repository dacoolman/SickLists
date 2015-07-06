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


        .when('/add',{
            templateUrl: 'partials/add.html'
        })

        // .when('/show/:id',{
        //     templateUrl: 'partials/show.html'
        // })



        .otherwise({
          redirectTo: '/home'
        });
    });
