'use strict';

/**
 * @ngdoc overview
 * @name repeidApp
 * @description
 * # repeidApp
 *
 * Main module of the application.
 */
angular
  .module('repeidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl',
        controllerAs: 'overview'
      })
      .when('/descargas', {
        templateUrl: 'views/descargas.html',
        controller: 'DescargasCtrl',
        controllerAs: 'descargas'
      })
      .when('/documentos', {
        templateUrl: 'views/documentos.html',
        controller: 'DocumentosCtrl',
        controllerAs: 'documentos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
