define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_543',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 543');
    	$scope.test = TestService.getTest()
    }]);
});
