define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_220',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 220');
    	$scope.test = TestService.getTest()
    }]);
});
