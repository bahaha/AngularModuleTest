define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_238',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 238');
    	$scope.test = TestService.getTest()
    }]);
});
