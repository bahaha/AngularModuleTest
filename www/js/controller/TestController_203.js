define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_203',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 203');
    	$scope.test = TestService.getTest()
    }]);
});
