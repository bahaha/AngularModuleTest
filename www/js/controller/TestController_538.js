define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_538',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 538');
    	$scope.test = TestService.getTest()
    }]);
});
