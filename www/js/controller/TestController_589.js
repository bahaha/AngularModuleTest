define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_589',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 589');
    	$scope.test = TestService.getTest()
    }]);
});
