define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_563',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 563');
    	$scope.test = TestService.getTest()
    }]);
});
