define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_953',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 953');
    	$scope.test = TestService.getTest()
    }]);
});
