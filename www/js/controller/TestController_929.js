define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_929',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 929');
    	$scope.test = TestService.getTest()
    }]);
});
