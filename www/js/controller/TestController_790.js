define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_790',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 790');
    	$scope.test = TestService.getTest()
    }]);
});
