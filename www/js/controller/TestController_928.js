define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_928',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 928');
    	$scope.test = TestService.getTest()
    }]);
});
