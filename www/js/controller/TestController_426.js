define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_426',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 426');
    	$scope.test = TestService.getTest()
    }]);
});
