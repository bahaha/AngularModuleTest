define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_321',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 321');
    	$scope.test = TestService.getTest()
    }]);
});
