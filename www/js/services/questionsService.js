angular.module('starter')

    .service('questionsService', function ($http, $q) {
        this.get_questions = function () {
            var d = $q.defer();
            url = 'http://dev.krsg.tech/academic_study/quiz/get';
            $http.post(url).then(function (res) {
                //console.log(res.data);
                d.resolve(res.data);
            })
            return d.promise;
        }

    })    