define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_387',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 387');
    	$scope.test = TestService.getTest()
    }]);
});
