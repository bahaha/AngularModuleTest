define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_23',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 23');
    	$scope.test = TestService.getTest()
    }]);
});
