define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_189',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 189');
    	$scope.test = TestService.getTest()
    }]);
});
