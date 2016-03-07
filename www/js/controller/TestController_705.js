define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_705',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 705');
    	$scope.test = TestService.getTest()
    }]);
});
