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
    var useronline = localStorage.getItem("UserOnline");
    var userOnInfo = JSON.parse(localStorage.getItem(useronline));
    var newUserInfo = userOnInfo;
    console.log(userOnInfo);
    console.log("............");


    $scope.error="Please enter an email and try again.";
    $scope.searchBox = { hide: false};
    $scope.data = { hide: false};
    $scope.newReport = {};

    $scope.submit = function() {
      if($scope.email == undefined || $scope.email == null || $scope.email == "" ) {
        $scope.searchBox.hide = true;
        $scope.data.hide = false;
        throw $scope.error;
      }
      else {
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        const requestURL = "https://www.beenverified.com/hk/dd/email?email="+$scope.email;

        axios.get(proxyURL + requestURL)
        .then(function(response) {
          console.log(response);
          setTimeout(function () {
            $scope.$apply(function () {

              $scope.searchBox.hide = false;
              $scope.data.hide = true;
              $scope.nameFound = response.data.names;
              $scope.usernames = response.data.usernames;
              $scope.emails = response.data.emails;
              $scope.social = response.data.social;
              $scope.jobs = response.data.jobs;

              $scope.newReport = {"search":$scope.email,
                                  "names": $scope.nameFound,
                                  "usernames":$scope.usernames,
                                  "emails":$scope.emails,
                                  "social":$scope.social,
                                  "jobs":$scope.jobs };

             $scope.updateUserReport($scope.newReport);
            });
         }, 100);

        }).catch(function(ex) {
          console.log('parsing failed', ex)
          })
        }
      }

      $scope.updateUserReport = function (reporte){
        newUserInfo.reporte.push(reporte);
        localStorage.setItem(userOnInfo.email,JSON.stringify(newUserInfo));
      }

  });

  /*


  /*
        // Use this approach
        const proxyURL = "https://cors-anywhere.herokuapp.com/";
        const requestURL = "https://www.beenverified.com/hk/dd/email?email="+$scope.email;
        $.getJSON(proxyURL + requestURL, function(data) {
          console.log(data);
        })

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

  */
