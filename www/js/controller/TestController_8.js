define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_8',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 8');
    	$scope.test = TestService.getTest()
    }]);
});
