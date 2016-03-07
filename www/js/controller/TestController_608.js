define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_608',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 608');
    	$scope.test = TestService.getTest()
    }]);
});
