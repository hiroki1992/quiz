angular.module('starter')


    .controller('gameCtrl', function ($scope, questionsService,$ionicPopup, $timeout,$location,$rootScope) {

        $scope.aaa = "gtdd";

        $scope.backTop = function () {
            location.href = "#/";
        }

        $scope.resultTop = function () {
            location.href = "#/result";
        }

        var me = $scope;//thisをmeに退避
        me.items = {};
        var rightNum = 0;//正解数
        var anserNum = null;//正解番号
        var questions = null;//クイズデータ

        var init = function () {
            me.items.currentNum = 0;//現在のクイズ番号(1問目)
            questions = JSON.parse(JSON.stringify(questionsService.questions));//クイズデータをサービスより取得&ディープコピー
            me.items.totalNum = questions.length;//取得したクイズデータの全クイズ数

            questionInit();
        }

        //解答選択肢用意
        var questionInit = function () {
            var currentQ = questions[me.items.currentNum];//現在のクイズ
            var qLength = currentQ.choices.length;//答え以外の選択肢数
            answerNum = Math.floor(Math.random() * (qLength + 1));//答えの番号(ランダム)
            currentQ.choices.splice(answerNum, 0, currentQ.answer);//選択肢に答えを混ぜる
            me.items.currentQ = currentQ;//現在のクイズをデータバインド用オブジェクトに代入

        };


        //解答ボタンが押されたら
        me.getAnswer = function (ind) {

            var flag = answerNum == ind;//正解か間違いか判定
            var flagText = "間違い";
            if (flag) {//正解だったら
                rightNum++;//正解数を増やす
                flagText = "正解";
            }

            /*$scope.showAlert({//解答をアラート表示
                  message: '正解は『' + me.items.currentQ.choices[answerNum] + '』です',
                  title: flagText,
                  buttonLabel: 'NEXT',
                  animation: 'default',
                  callback: function () {// NEXTがクリックされたら
                      if (me.items.currentNum >= me.items.totalNum - 1) {//全問終了したら
                          myNavigator.pushPage('result.html', { totalNum: me.items.totalNum, rightNum: rightNum });
                      } else {//まだクイズが残っていれば
                          me.items.currentNum++;
                          $scope.$apply(questionInit);//次のクイズ用意
                      }
                  }
                  
                  
              });
              */
            var myPopup = $ionicPopup.show({
                template: '正解は『' + me.items.currentQ.choices[answerNum] + '』です',
                title: flagText,
                //subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    {
                        text: '<b>NEXT</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (me.items.currentNum >= me.items.totalNum - 1) {//全問終了したら
                                // $scope.items.totalNum = me.items.totalNum;
                                // $scope.items.rightNum = rightNum;
                                //console.log(me.items.totalNum,rightNum);
                                // Globals.hoge = 'hoge : ' + new Date().getTime();
                                
                                $rootScope.hoge = {totalNum: me.items.totalNum,rightNum: rightNum} ;
                               
                               $location.path('#/result/');  
                                  location.href = "#/result";
                                
                            } else {//まだクイズが残っていれば
                                me.items.currentNum++;
                                console.log(me.items.currentNum);
                                // これかかないと$scope.$applyでエラー
                                $timeout(function () {
                                    $scope.$apply(questionInit);//次のクイズ用意
                                });
                             }
                        }
                    }
                ]
            });

        };
        init();

    })