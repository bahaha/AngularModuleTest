define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_558',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 558');
    	$scope.test = TestService.getTest()
    }]);
});
