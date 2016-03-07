define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_199',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 199');
    	$scope.test = TestService.getTest()
    }]);
});
