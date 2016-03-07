define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_602',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 602');
    	$scope.test = TestService.getTest()
    }]);
});
