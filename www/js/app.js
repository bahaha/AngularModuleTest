// Ionic Starter App
var timestamp = new Date().getTime();
define(['angularAMD'], function(angularAMD){
    'use strict';
    var app = angular.module('starter', ['ionic']);
    var $stateProviderRef;
    app.config(function($stateProvider, $urlRouterProvider){
        $stateProviderRef = $stateProvider;
        $urlRouterProvider.otherwise('/home')

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
          })
    });
    app.run(function($ionicPlatform, $state, $http) {
        console.log($ionicPlatform)
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
              // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
              // for form inputs)
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

              // Don't remove this line unless you know what you are doing. It stops the viewport
              // from snapping when text inputs are focused. Ionic handles this internally for
              // a much nicer keyboard experience.
              cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
              StatusBar.styleDefault();
            }
        })

        $http.get('RouteTable.json').success(function(data){
            angular.forEach(data, function(value, key){
                $stateProviderRef.state(value.name, angularAMD.route(value.state))
            })
        });
        $state.go('home');
    });
    angularAMD.bootstrap(app,false,document.getElementById('start'));
    var diff = new Date().getTime() - timestamp
    console.log('loading angular modules, using ' + diff +' ms')
    return app;
});