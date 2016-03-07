define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_70',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 70');
    	$scope.test = TestService.getTest()
    }]);
});
