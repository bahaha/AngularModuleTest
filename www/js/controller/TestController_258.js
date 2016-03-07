define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_258',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 258');
    	$scope.test = TestService.getTest()
    }]);
});
