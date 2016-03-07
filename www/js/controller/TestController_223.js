define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_223',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 223');
    	$scope.test = TestService.getTest()
    }]);
});
