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
    $scope.isValidEmail= function(mail){
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        return regexEmail.test(mail);
    }
    var checkUser = localStorage.getItem("UserOnline");
    if(checkUser != null || checkUser != undefined){
      localStorage.removeItem("UserOnline");
    }
    $scope.signupRoute = 'signup';
    $scope.data = { hide: false};
    $scope.error= "Login Failed. Please try again";
    $scope.login = function (){
      var email = $scope.inputEmail;
      var password = $scope.inputPassword;
      if (email != "undefined" || email != "null" || password != "undefined" || password !="null") {
        if($scope.isValidEmail(email)){
          if(localStorage.getItem(email) != null || localStorage.getItem(email) != undefined ){
            var foundUser = JSON.parse(localStorage.getItem(email));
            var userPass = foundUser.password;
            if(userPass === password){
              localStorage.setItem("UserOnline",email);
              return true;
            }
            else { throw $scope.error; } //  "Error: Password is incorrect";
          }
          else{ throw  $scope.error; } //'Error: User not found';
        }
        else { throw  $scope.error; }

      }
      else{ throw $scope.error; } // 'Error: username or password is incorrect'; }
    },

    $scope.submit = function() {
      try {
          $scope.login();
          $location.path('/dashboard');
          return false;
      }
      catch (e) {
        $location.path('/login');
        $scope.data.hide = true;
      }
    }

  });
