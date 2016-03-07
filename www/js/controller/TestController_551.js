define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_551',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 551');
    	$scope.test = TestService.getTest()
    }]);
});
