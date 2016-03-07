define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_456',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 456');
    	$scope.test = TestService.getTest()
    }]);
});
