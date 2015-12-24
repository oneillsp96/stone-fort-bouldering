'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state, $cordovaOauth, $localStorage, $location, $http, $ionicPopup, $firebase, $firebaseObject, $firebaseArray, Auth, FURL, Utils, Problems) {
  var ref = new Firebase(FURL);

  $scope.logOut = function () {
    Auth.logout();
    $location.path("/login");
  }

  // function getCurrentUserProblems() {
  //   $scope.problems = Problems.currentUserProblems;
  //   //console.log("bind problem data: " + Problems.currentUserProblems)
  // }

  //var problemsRef = $firebaseArray(ref.child('stoneFortUsers').child(Auth.userkey).child('problems').child());

  
  
 
  //var userRef = $firebaseArray(ref.child('stoneFortUsers').child(Auth.userkey).child('problems')); //.child(Problems.currentUserProblems.indexOf(problem)));
  $scope.problems = $firebaseArray(ref.child('stoneFortUsers').child(Auth.userkey).child('problems')); //.child(Problems.currentUserProblems.indexOf(problem)));
  
  //var userRef = $firebaseArray(ref.child('stoneFortUsers').child(Auth.userkey).child('problems'));

  //console.log(userRef);

    $scope.updateData = function (problem) {
        $scope.problems.$save(problem)
      }





  //getCurrentUserProblems();

});
