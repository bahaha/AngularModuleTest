define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_791',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 791');
    	$scope.test = TestService.getTest()
    }]);
});
