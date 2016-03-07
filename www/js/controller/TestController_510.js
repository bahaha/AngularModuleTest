define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_510',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 510');
    	$scope.test = TestService.getTest()
    }]);
});
