define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_531',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 531');
    	$scope.test = TestService.getTest()
    }]);
});
