define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_933',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 933');
    	$scope.test = TestService.getTest()
    }]);
});
