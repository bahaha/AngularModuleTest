define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_674',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 674');
    	$scope.test = TestService.getTest()
    }]);
});
