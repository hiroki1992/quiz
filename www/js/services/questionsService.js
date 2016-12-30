angular.module('starter')

.value('questionsService', {
    questions : [
            {
            "text": "iPhoneの主要な開発言語は？",
            "answer": "Objective-C",
            "choices": ["Java","JavaScript","Python"]
          },
          {
            "text": "Google社製のWEBブラウザは？",
            "answer": "Chrome",
            "choices": ["FireFox","Opera","Safari"]
          },
          /*{
            "text": "HTTPステータスコードで503の意味は？",
            "answer": "サーバー過負荷",
            "choices": ["NotFound","認証エラー","アクセス禁止"]
          },
          {
            "text": "英語のスラングでバカ・間抜けといった意味を持つ分散型バージョン管理システムとは？",
            "answer": "Git",
            "choices": ["Subversion","Mercurial","CVS"]
          },
          {
            "text": "HTMLのHはどんな意味？",
            "answer": "Hyper",
            "choices": ["Hip","Handshake","History"]
          }*/
        ]
})