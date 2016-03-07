define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_890',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 890');
    	$scope.test = TestService.getTest()
    }]);
});
