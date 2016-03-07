define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_360',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 360');
    	$scope.test = TestService.getTest()
    }]);
});
