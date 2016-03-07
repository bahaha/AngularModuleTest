define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_60',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 60');
    	$scope.test = TestService.getTest()
    }]);
});
