define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_486',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 486');
    	$scope.test = TestService.getTest()
    }]);
});
