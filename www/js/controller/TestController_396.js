define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_396',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 396');
    	$scope.test = TestService.getTest()
    }]);
});
