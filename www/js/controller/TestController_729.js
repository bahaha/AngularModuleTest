define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_729',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 729');
    	$scope.test = TestService.getTest()
    }]);
});
