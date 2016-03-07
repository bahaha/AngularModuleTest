define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_939',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 939');
    	$scope.test = TestService.getTest()
    }]);
});
