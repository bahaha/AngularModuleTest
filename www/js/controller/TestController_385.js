define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_385',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 385');
    	$scope.test = TestService.getTest()
    }]);
});
