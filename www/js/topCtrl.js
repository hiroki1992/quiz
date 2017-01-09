angular.module('starter')

    .controller('topCtrl', function ($scope, $location, questionsService, $rootScope) {

        $scope.gameStart = function (category_id) {
            if (category_id == null) {
                alert("カテゴリーを選択してください。");
                return false;
            }

            console.log(category_id);
            $rootScope.category_id = category_id;
            $location.path("/game");
        }

        var p = questionsService.get_category();
        p.then(function (categories) {
            $scope.categories = categories;
            
        });


    })







