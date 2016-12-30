angular.module('starter')

    .controller('topCtrl', function ($scope,$location) {
      
        $scope.gameStart = function () {
            $location.path("/game");
    
            
        }


   })

  

   

   

