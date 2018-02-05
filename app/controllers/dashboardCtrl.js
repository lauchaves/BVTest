'use strict';
/**
 * @ngdoc function
 * @name BVTest.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of BVTest
 */
angular.module('BVTest')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;
    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });
  });
