define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_578',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 578');
    	$scope.test = TestService.getTest()
    }]);
});
