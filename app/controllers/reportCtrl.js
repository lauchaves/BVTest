'use strict';
/**
 * @ngdoc function
 * @name BVTest.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of BVTest
 */

angular.module('BVTest')
  .controller('reportCtrl', function($scope, $location,$http) {
    var useronline = localStorage.getItem("UserOnline");
    $scope.userOnInfo = JSON.parse(localStorage.getItem(useronline));
    $scope.reporte = $scope.userOnInfo.reporte;
  });
