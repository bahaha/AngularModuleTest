define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_32',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 32');
    	$scope.test = TestService.getTest()
    }]);
});
