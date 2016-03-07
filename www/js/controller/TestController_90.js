define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_90',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 90');
    	$scope.test = TestService.getTest()
    }]);
});
