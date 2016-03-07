define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_325',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 325');
    	$scope.test = TestService.getTest()
    }]);
});
