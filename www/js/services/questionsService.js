angular.module('starter')

    .service('questionsService', function ($http, $q) {
        this.get_questions = function (category_id) {
             
            var d = $q.defer();
            // console.log(category_id);
            url = 'http://dev.krsg.tech/academic_study/quiz/get?category_id=' + category_id;
            // console.log(param);
            $http.get(url).then(function (res) {
                console.log(res.data);
                d.resolve(res.data);
            })
            return d.promise;
        }


        this.get_category = function () {
            var d = $q.defer();
            url = 'http://dev.krsg.tech/academic_study/quiz/get_category';
            $http.get(url).then(function (res) {
                d.resolve(res.data);
            })
            return d.promise;
        }
    })    