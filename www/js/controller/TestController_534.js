define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_534',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 534');
    	$scope.test = TestService.getTest()
    }]);
});
