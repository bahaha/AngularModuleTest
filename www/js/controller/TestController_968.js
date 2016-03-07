define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_968',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 968');
    	$scope.test = TestService.getTest()
    }]);
});
