define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_980',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 980');
    	$scope.test = TestService.getTest()
    }]);
});
