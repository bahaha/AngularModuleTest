define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_817',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 817');
    	$scope.test = TestService.getTest()
    }]);
});
