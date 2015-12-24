angular.module('App').factory('Problems', function (FURL, $firebaseAuth, $firebaseArray, $firebaseObject, Utils) {

  //var ref = new Firebase(FURL),
  var Problems = {};
  
  //Problems.currentUserProblems = []; //set during login
  
  Problems.getAllProblems = function () {

    return [
      {
        name: "Super Mario",
        grade: "V4",
        complete: false
      },
      {
        name: "Pancake Mantle",
        grade: "V3",
        complete: false
      },
      {
        name: "Manute Bol",
        grade: "V5",
        complete: false
      }
    ];
  }

  return Problems;
});
