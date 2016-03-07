define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_562',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 562');
    	$scope.test = TestService.getTest()
    }]);
});
