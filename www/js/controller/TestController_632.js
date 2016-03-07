define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_632',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 632');
    	$scope.test = TestService.getTest()
    }]);
});
