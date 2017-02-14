angular.module('yapp', [])
    .controller('PageController', function($scope) {
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
        $scope.hola = "HOLA ";

    });
