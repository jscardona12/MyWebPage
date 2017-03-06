var app = angular.module('yapp', ['ngAnimate','ui.router']);

    app.config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise("/home");
        $stateProvider

            .state('home',{
                url:'/home',
                templateUrl:'home.html',
                controller:'PageController'
            })
            .state('about',{
                url:'/about',
                templateUrl:'about.html',
                controller:'PageController'
            })
            .state('hobbies',{
                url:'/hobbies',
                templateUrl:'hobbies.html',
                controller:'PageController'
            })
            .state('projects',{
                url:'/projects',
                templateUrl:'projects.html',
                controller:'PageController'

            })
            .state('contact',{
                url:'/contact',
                templateUrl:'contact.html',
                controller:'PageController'
            })


    });


    app.controller('PageController', function($scope) {
        $scope.hobbies =
            [
                {
                    name:"Horse Jumping",
                    info:"I've been doing horse jumping since i'm 6 years old. It is a pasion, and i practice in the Club Campestre el Bosque in Silvania.",
                    img:"img/horse.jpg"
                },
                {
                    name:"Tenis",
                    info:"I've been playing tenis since i'm 6 years old, I play in the Club Campestre el Bosque in Silvania.",
                    img:"img/tenis.jpg"
                },
                {
                    name:"Watch Movies",
                    info: "I love watching movies, doesn't matter where, it can be in a Cinema or in Netflix.",
                    img:"img/cine.jpg"
                }

            ];

        $scope.projects =
            [
                {
                    name:"Tripulator",
                    img:"img/tripulator.PNG",
                    text:"Tripulator is a vacation planner that allows you to plan hour to hour your vacations.",
                    animate:true,
                    play: function(){$scope.projects[0].animate = !$scope.projects[0].animate;}

                },
                {
                    name:"GanaSoft",
                    img:"img/GANASOFT.png",
                    text:"GanaSoft is a software that allow you to manage the cattle in an order form and also allows " +
                    "sales management of the cattle bussines",
                    animate:true,
                    play: function(){$scope.projects[1].animate = !$scope.projects[1].animate;}

                },
                {
                    name:"SilentEye",
                    img:"img/silenteye.png",
                    text:"SilentEye is an active security system, that allow the users to re-use their old smartphones" +
                    " as security cameras, it also includes an AI that is always available to active or deactive the system.",
                    animate:true,
                    play: function(){$scope.projects[2].animate = !$scope.projects[2].animate;}



                }



            ];

        $scope.hide = false;

        $scope.closeHome = function()
        {
            if(!$scope.hide)
                $scope.hide = true;
            console.log($scope.hide);
        }
        $scope.openHome = function()
        {
            if($scope.hide)
                $scope.hide = false;
            console.log($scope.hide);
        }


    });
