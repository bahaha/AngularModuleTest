define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_324',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 324');
    	$scope.test = TestService.getTest()
    }]);
});
