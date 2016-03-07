define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_9',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 9');
    	$scope.test = TestService.getTest()
    }]);
});
