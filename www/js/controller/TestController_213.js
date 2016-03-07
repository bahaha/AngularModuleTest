define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_213',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 213');
    	$scope.test = TestService.getTest()
    }]);
});
