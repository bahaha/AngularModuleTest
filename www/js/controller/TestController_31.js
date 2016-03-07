define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_31',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 31');
    	$scope.test = TestService.getTest()
    }]);
});
