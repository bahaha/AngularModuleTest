define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_262',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 262');
    	$scope.test = TestService.getTest()
    }]);
});
