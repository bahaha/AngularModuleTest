define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_549',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 549');
    	$scope.test = TestService.getTest()
    }]);
});
