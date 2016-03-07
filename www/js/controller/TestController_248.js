define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_248',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 248');
    	$scope.test = TestService.getTest()
    }]);
});
