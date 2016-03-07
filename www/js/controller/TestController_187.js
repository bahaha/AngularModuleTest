define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_187',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 187');
    	$scope.test = TestService.getTest()
    }]);
});
