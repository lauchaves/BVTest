'use strict';

/**
 * @ngdoc function
 * @name BVTest.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of BVTest
 */

angular.module('BVTest')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.login = function (){

      let email = $scope.inputEmail;
      let password = $scope.inputPassword;

      if (email != "undefined" || email != "null" || password != "undefined" || password !="null")
      {
        if(localStorage.getItem(email) != null || localStorage.getItem(email) != undefined ){
          var foundUser = JSON.parse(localStorage.getItem(email));
          var userPass = foundUser.password;

          if(userPass === password){
            return true;
          }
          else{
            alert("Error: Password is incorrect");
            return false;
          }
        }
        else{
          alert('Error: User not found');
          return false;
        }
      }
      else{
        alert('Error: username or password is incorrect');
        return false;
      }
    },

    $scope.signupRoute = 'signup';
    $scope.submit = function() {
      if ($scope.login()){
        $location.path('/dashboard');
        return false;
      }
      else {
        $location.path('/login');
        return false;
      }
    }

  });
