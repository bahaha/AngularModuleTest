define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_590',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 590');
    	$scope.test = TestService.getTest()
    }]);
});
