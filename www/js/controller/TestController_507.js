define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_507',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 507');
    	$scope.test = TestService.getTest()
    }]);
});
