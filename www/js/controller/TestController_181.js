define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_181',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 181');
    	$scope.test = TestService.getTest()
    }]);
});
