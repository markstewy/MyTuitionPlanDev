var app = angular.module("welcomeApp", []);

app.directive('bgImage', function(){
  return {
    restrict: 'E',
    replace: true,
    template:'<div class="bgImage"></div>',
    controller: function($scope){
      $scope.imgBank = [
      // /*ocean*/          "https://images.unsplash.com/photo-1449168013943-3a15804bb41c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
      /*forest*/         "https://images.unsplash.com/photo-1448749927985-5565d99c10ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b830c59c9205015b18f6c06889257bf1",
      /*sf*/             "https://images.unsplash.com/photo-1452269826925-82be65baa057?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=813effa9de7316c73afe87f515173252",
      /*girlwalking*/          "https://images.unsplash.com/photo-1452270313744-e5ccb6de0c78?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ffd731f7388c6611aab2eba59720d47f",
       /*beach fire*/          "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=16af70cd5a412898fbcd6e80940718d2",
      /*leap*/           "https://images.unsplash.com/photo-1428954376791-d9ae785dfb2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a7859f3df1a0811527fcb238f3202518",
      /*wall smile*/     "https://images.unsplash.com/31/iqlYdAAYQiaOCoKnT6jE_kabia.jpg?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
      // /*camping*/        "https://images.unsplash.com/photo-1444124818704-4d89a495bbae?crop=entropy&dpr=2&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425",
      // /*hair*/           "https://images.unsplash.com/photo-1454909516657-78526f214d05?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=2368db70b62b646d4e7d1d030509cc84",
      // /*gf*/             "https://images.unsplash.com/uploads/1411070807173e4d6762d/f84a3a01?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=df3f701669d5ac5b7e2689e3690f8e7f",
      // /*oceancliff*/     "https://images.unsplash.com/photo-1454625191319-786c05137ef5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=be8b9d695058e46a8b409d5cacae8a7a",
      // /*stadium*/        "https://images.unsplash.com/photo-1420177743490-15ee9ba8c78f?crop=entropy&dpr=2&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1425"
        ]
      $scope.quoteBank = [

        "You don't have to go it alone.",
        "Let's find your path together.",
        "Make big deicsions with confidence.",
        "Because there's more to life than making student loan payments.",
        "Look before you leap.",
        "Thinking about the future should make you smile."

      ]
      },
    link: function (scope, elem){
      function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var i = getRandomInt(0, 5);
      console.log(i);
      scope.imgMain = scope.imgBank[i];
      scope.quoteMain = scope.quoteBank[i];

      elem.css('background', 'linear-gradient(rgba(239, 192, 117, 0.47), rgba(78, 76, 72, 0.45098)),url('+scope.imgMain+') no-repeat center center fixed')
      elem.css('background-size', 'cover')

    }

  }
})
