define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_106',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 106');
    	$scope.test = TestService.getTest()
    }]);
});
