define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_68',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 68');
    	$scope.test = TestService.getTest()
    }]);
});
