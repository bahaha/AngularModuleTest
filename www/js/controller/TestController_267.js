define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_267',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 267');
    	$scope.test = TestService.getTest()
    }]);
});
