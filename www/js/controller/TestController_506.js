define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_506',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 506');
    	$scope.test = TestService.getTest()
    }]);
});
