define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_695',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 695');
    	$scope.test = TestService.getTest()
    }]);
});
