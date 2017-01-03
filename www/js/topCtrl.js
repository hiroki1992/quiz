angular.module('starter')

    .controller('topCtrl', function ($scope, $location, questionsService) {

        $scope.gameStart = function () {
            $location.path("/game");
        }

        var p = questionsService.get_category();
        p.then(function (categories) {
            $scope.categories = categories;
            console.log(categories);
            
        });


    })







