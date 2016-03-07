define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_161',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 161');
    	$scope.test = TestService.getTest()
    }]);
});
