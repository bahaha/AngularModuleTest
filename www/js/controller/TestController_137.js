define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_137',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 137');
    	$scope.test = TestService.getTest()
    }]);
});
