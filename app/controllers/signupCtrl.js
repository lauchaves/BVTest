'use strict';

/**
 * @ngdoc function
 * @name BVTest.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of BVTest
 */
angular.module('BVTest')
  .controller('SignupCtrl', function($scope, $location) {
    $scope.isValidEmail= function(mail){
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        return regexEmail.test(mail);
    }
    $scope.store = function () {
      var user;
      var storeEmail;
      var newName = $scope.inputName;
      var newEmail = $scope.inputEmail;
      var newPassword = $scope.inputPassword;
      $scope.data = { hide: false};
      $scope.error= "Unable to sign up. Please try again";

      if (newEmail != undefined || newEmail != null || newEmail != "" ) {
          if($scope.isValidEmail(newEmail)){

          user = { 'name': newName, 'email': newEmail, 'password': newPassword, 'reporte' : []};
          storeEmail = localStorage.getItem(newEmail);

          if(storeEmail != null || storeEmail != undefined){
            $scope.data.hide = true;
            throw $scope.error;

          }

          else {
            localStorage.setItem(newEmail,JSON.stringify(user));
            localStorage.setItem("UserOnline",email);
            return true;}

          } else {
            $scope.data.hide = true;
            throw "Not valid: " + $scope.error;
          }
      }
      else {
        $scope.data.hide = true;
        throw $scope.error;
      }
    };

    $scope.submit = function() {

      try {
          $scope.store();
          $location.path('/login');
          return false;
      }
      catch (e) {
        $scope.data.hide = true;
      }
    }
  });
