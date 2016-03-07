define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_959',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 959');
    	$scope.test = TestService.getTest()
    }]);
});
