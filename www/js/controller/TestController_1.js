define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_1',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 1');
    	$scope.test = TestService.getTest()
    }]);
});
