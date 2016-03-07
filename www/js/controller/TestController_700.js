define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_700',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 700');
    	$scope.test = TestService.getTest()
    }]);
});
