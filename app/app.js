'use strict';

/**
 *
 * @name BVTest
 * @description
 * # BVTest
 *
 * Main module of the application.
 */


var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'signup', state: { url: '/signup', parent: 'base', templateUrl: 'views/signup.html', controller: 'SignupCtrl', data: {text: "Signup", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'emailSearch', state: { url: '/emailSearch', parent: 'dashboard', templateUrl: 'views/dashboard/emailSearch.html', controller: 'EmailSearchCtrl', data: {text: "Email Search", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', controller: 'reportCtrl', data: {text: "Reports", visible: true } } },
        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} }
    ];

angular.module('BVTest', [
  'ui.router',
  'snap',
  'ngAnimate',
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/emailSearch');
    $urlRouterProvider.otherwise('/login');
    angular.forEach(states, function (state) {
      $stateProvider.state(state.name, state.state);
    });
  });
