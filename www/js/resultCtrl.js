angular.module('starter')


 .controller('resultCtrl', function ($scope,$location,$rootScope) {
        $scope.resultback = function () {
            location.href = "/";
        }

  $scope.gameValue = $rootScope.hoge;

  console.log($scope.gameValue);
    /* var rate = 100;
    this.items = myNavigator.getCurrentPage().options;
    this.items.score = this.items.rightNum * rate;
    this.backTop = function(){
    		myNavigator.pushPage('top.html', { animation: "none" });
    };*/


})
