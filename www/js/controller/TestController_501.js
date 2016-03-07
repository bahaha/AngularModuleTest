define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_501',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 501');
    	$scope.test = TestService.getTest()
    }]);
});
