define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_652',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 652');
    	$scope.test = TestService.getTest()
    }]);
});
