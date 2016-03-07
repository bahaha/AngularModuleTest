define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_375',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 375');
    	$scope.test = TestService.getTest()
    }]);
});
