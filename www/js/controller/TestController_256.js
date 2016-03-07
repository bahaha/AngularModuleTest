define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_256',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 256');
    	$scope.test = TestService.getTest()
    }]);
});
