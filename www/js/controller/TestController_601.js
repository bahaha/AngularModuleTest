define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_601',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 601');
    	$scope.test = TestService.getTest()
    }]);
});
