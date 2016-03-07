define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_697',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 697');
    	$scope.test = TestService.getTest()
    }]);
});
