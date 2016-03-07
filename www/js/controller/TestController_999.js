define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_999',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 999');
    	$scope.test = TestService.getTest()
    }]);
});
