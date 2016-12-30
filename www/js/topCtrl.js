angular.module('starter')

    .controller('topCtrl', function ($scope,$location) {
      
        $scope.product = { name: 'Azurite', price: 2.95 };
        $scope.aaa = "ffff";
        $scope.login = function () {
            
        }
        $scope.gameStart = function () {
            $location.path("/game");
    
            
        }


   })

  

   

   

