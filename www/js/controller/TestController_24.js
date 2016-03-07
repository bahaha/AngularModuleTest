define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_24',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 24');
    	$scope.test = TestService.getTest()
    }]);
});
