define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_485',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 485');
    	$scope.test = TestService.getTest()
    }]);
});
