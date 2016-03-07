define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_250',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 250');
    	$scope.test = TestService.getTest()
    }]);
});
