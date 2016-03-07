define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_195',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 195');
    	$scope.test = TestService.getTest()
    }]);
});
