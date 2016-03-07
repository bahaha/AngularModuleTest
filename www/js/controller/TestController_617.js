define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_617',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 617');
    	$scope.test = TestService.getTest()
    }]);
});
