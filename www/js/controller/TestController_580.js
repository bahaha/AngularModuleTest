define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_580',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 580');
    	$scope.test = TestService.getTest()
    }]);
});
