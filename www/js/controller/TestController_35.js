define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_35',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 35');
    	$scope.test = TestService.getTest()
    }]);
});
