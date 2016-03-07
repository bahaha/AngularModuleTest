define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_547',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 547');
    	$scope.test = TestService.getTest()
    }]);
});
