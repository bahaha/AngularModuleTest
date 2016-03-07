define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_600',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 600');
    	$scope.test = TestService.getTest()
    }]);
});
