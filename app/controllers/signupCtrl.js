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
    $scope.store = function () {

      var newName = $scope.inputName;
      var newEmail = $scope.inputEmail;
      var newPassword = $scope.inputPassword;
      $scope.data = { hide: false};
      $scope.error= "User already Registered. Please try again";

      var user = { 'name': newName, 'email': newEmail, 'password': newPassword, 'reporte' : []};
      var storeEmail = localStorage.getItem(newEmail);

      if (storeEmail === null || storeEmail === undefined ){
        localStorage.setItem(newEmail,JSON.stringify(user));
        localStorage.setItem("UserOnline",email);
        return true;
      }
      else {throw $scope.error; }
    };

    $scope.submit = function() {

      try {
          $scope.store();
          $location.path('/dashboard');
          return false;
      }
      catch (e) {
        $scope.data.hide = true;
      }
    }
  });
