angular.module('starter')

    .controller('topCtrl', function ($scope) {
      
        $scope.product = { name: 'Azurite', price: 2.95 };
        $scope.aaa = "ffff";
        $scope.login = function () {
            
        }
        $scope.gameStart = function () {
            location.href = "#/game";
            console.log('ccc');
        }


   })

  

    .controller('resultCtrl', function ($scope,$location) {
        $scope.resultback = function () {
            location.href = "/";
        }

        
    })

   

   

