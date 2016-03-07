define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_737',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 737');
    	$scope.test = TestService.getTest()
    }]);
});
