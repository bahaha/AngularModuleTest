define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_615',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 615');
    	$scope.test = TestService.getTest()
    }]);
});
