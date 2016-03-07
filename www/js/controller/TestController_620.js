define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_620',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 620');
    	$scope.test = TestService.getTest()
    }]);
});
