define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_218',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 218');
    	$scope.test = TestService.getTest()
    }]);
});
