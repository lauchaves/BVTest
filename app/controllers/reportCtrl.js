'use strict';
/**
 * @ngdoc function
 * @name BVTest.controller:ReporstCtrl
 * @description
 * # ReporstCtrl
 * Controller of BVTest
 */


angular.module('BVTest')
  .controller('reportCtrl', function($scope, $location,$http) {
    var useronline = localStorage.getItem("UserOnline");
    $scope.userOnInfo = JSON.parse(localStorage.getItem(useronline));
    console.log($scope.userOnInfo);
    $scope.reporte = $scope.userOnInfo.reporte;
    console.log($scope.reporte);


    /*$scope.searchedEmail = $scope.userOnInfo.reporte.search;
    console.log($scope.searchedEmail);
    $scope.nameFound = $scope.userOnInfo.reporte.names;
    $scope.usernames =$scope.userOnInfo.reporte.usernames;
    $scope.emails = $scope.userOnInfo.reporte.emails;
    $scope.social = $scope.userOnInfo.reporte.social;
    $scope.jobs = $scope.userOnInfo.reporte.jobs;
    */
  });
