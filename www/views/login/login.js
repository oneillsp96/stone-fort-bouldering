'Use Strict';
angular.module('App').controller('loginController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Problems) {
  var ref = new Firebase(FURL);
  var userkey = "";
  $scope.signIn = function (user) {
    console.log("logged in");
    if(angular.isDefined(user)){
    Utils.show();
    Auth.login(user)
      .then(function(authData) {
      console.log("user ID:" + JSON.stringify(authData));

      ref.child('stoneFortUsers').orderByChild("id").equalTo(authData.uid).on("child_added", function(snapshot) {
        console.log(snapshot.key());
        userkey = snapshot.key();
        Auth.userkey = userkey; //use in home.js
        var obj = $firebaseObject(ref.child('stoneFortUsers').child(userkey));

        obj.$loaded()
          .then(function(data) {
            //console.log(data === obj); // true
            console.log("stone fort user object: " + JSON.stringify(data.problems));
            console.log(data.problems);
            
            Problems.currentUserProblems = data.problems;
            
            console.log("Problems.currentUserProblems: " + Problems.currentUserProblems)
            
            $localStorage.email = obj.email;
            $localStorage.userkey = userkey;

              Utils.hide();
              $state.go('home');

          })
          .catch(function(error) {
            console.error("Error:", error);
          });
      });

      }, function(err) {
        Utils.hide();
         Utils.errMessage(err);
      });
    }
  };

});
