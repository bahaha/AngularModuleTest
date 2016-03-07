define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_922',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 922');
    	$scope.test = TestService.getTest()
    }]);
});
