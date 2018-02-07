'use strict';
/**
 * @ngdoc function
 * @name BVTest.controller:EmailSearchCtrl
 * @description
 * # EmailSearchCtrl
 * Controller of BVTest
 */

angular.module('BVTest')
  .controller('EmailSearchCtrl', function($scope, $location,$http) {
    $scope.error="Please enter an email and try again.";
    $scope.data = { hide: false};
    $scope.submit = function() {
      if($scope.email == undefined || $scope.email == null ) {
        $scope.data.hide = true;
        throw $scope.error;
      }
      else {
        //$http.get('https://www.beenverified.com/hk/dd/email?email='+$scope.email)
/*
        $http.get('https://www.beenverified.com/hk/dd/email?email=skip.suva@gmail.com')
        .then(function (response){
          console.log(response);
        })
      }
      */

      $http({
            method: 'GET',
            url:'https://www.beenverified.com/hk/dd/email?email=skip.suva@gmail.com',
            data: '',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(
            function(response) {
                return response;
            },
            function(errResponse) {
                console.error('Error !!');
            })
      }

    }
  });
