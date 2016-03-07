define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_275',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 275');
    	$scope.test = TestService.getTest()
    }]);
});
