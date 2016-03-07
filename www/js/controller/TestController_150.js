define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_150',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 150');
    	$scope.test = TestService.getTest()
    }]);
});
