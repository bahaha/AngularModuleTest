define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_550',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 550');
    	$scope.test = TestService.getTest()
    }]);
});
