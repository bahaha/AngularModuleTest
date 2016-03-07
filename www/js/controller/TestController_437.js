define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_437',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 437');
    	$scope.test = TestService.getTest()
    }]);
});
