define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_910',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 910');
    	$scope.test = TestService.getTest()
    }]);
});
