define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_384',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 384');
    	$scope.test = TestService.getTest()
    }]);
});
