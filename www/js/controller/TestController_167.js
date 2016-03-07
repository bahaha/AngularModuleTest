define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_167',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 167');
    	$scope.test = TestService.getTest()
    }]);
});
