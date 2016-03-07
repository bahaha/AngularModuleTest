define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_399',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 399');
    	$scope.test = TestService.getTest()
    }]);
});
