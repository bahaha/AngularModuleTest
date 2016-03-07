define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_786',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 786');
    	$scope.test = TestService.getTest()
    }]);
});
