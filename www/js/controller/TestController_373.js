define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_373',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 373');
    	$scope.test = TestService.getTest()
    }]);
});
