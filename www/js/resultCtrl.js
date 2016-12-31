angular.module('starter')

    .controller('resultCtrl', function ($scope, $location, $rootScope) {
        $scope.resultback = function () {
            $location.path("/");
        }

        $scope.items = $rootScope.result;
 
    var rate = 100;
    
this.score =  $scope.items.rightNum;
    $scope.resultscore   = this.score * rate;
    
})
