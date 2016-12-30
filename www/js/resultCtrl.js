angular.module('starter')

    .controller('resultCtrl', function ($scope, $location, $rootScope) {
        $scope.resultback = function () {
            location.href = "/";
        }

        $scope.items = $rootScope.result;

 
    var rate = 100;
    
 console.log($scope.items.rightNum);
this.score =  $scope.items.rightNum;
    $scope.resultscore   = this.score * rate;
    
})
