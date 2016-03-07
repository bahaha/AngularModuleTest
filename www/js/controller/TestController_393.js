define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_393',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 393');
    	$scope.test = TestService.getTest()
    }]);
});
