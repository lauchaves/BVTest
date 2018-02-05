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
      var user = { 'name': newName, 'email': newEmail, 'password': newPassword, 'reporte' : []};
      var storeEmail = localStorage.getItem(newEmail);

      if (storeEmail === null || storeEmail === undefined ){
        localStorage.setItem(newEmail,JSON.stringify(user));
        return true;
      }
      else {
        alert("Error: User already Registered");
        return false;
      }
    };

    $scope.submit = function() {
      if ($scope.store()) {
        $location.path('/dashboard');
        return false;
      }
      else {
         $location.path('/login');
         return false;
       }
    }
  });
