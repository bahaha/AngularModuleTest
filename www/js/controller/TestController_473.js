define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_473',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 473');
    	$scope.test = TestService.getTest()
    }]);
});
