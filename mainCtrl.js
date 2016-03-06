angular.module("welcomeApp").controller("welcomeCtrl", function($scope, $interval, $timeout){
    $scope.name = "test";


    // // ====image cycle======
    // var i = 0;
    // $scope.imgMain = imgBank[i];
    // $scope.quoteMain = quoteBank[i];
    // $interval(function () {
    //   if (i === imgBank.length - 1) {
    //     i = 0;
    //     $scope.imgMain = imgBank[i];
    //     $scope.quoteMain = quoteBank[i];
    //   }
    //   else {
    //     $scope.imgMain = imgBank[i];
    //     $scope.quoteMain = quoteBank[i];
    //     i++;
    //   }
    // }, 3000);


  //  ===========Coundown Clock================
    // var launch = Date("June 30, 2016 08:00:00:000")
    //
    // $interval(function () {
    //   $scope.dateNow = new Date();
    //   // $scope.dDiff = launch.getTime() - dateNow.getTime();
    // }, 1000);


});
