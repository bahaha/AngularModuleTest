define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_422',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 422');
    	$scope.test = TestService.getTest()
    }]);
});
