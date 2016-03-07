define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_444',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 444');
    	$scope.test = TestService.getTest()
    }]);
});
