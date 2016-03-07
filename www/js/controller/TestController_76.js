define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_76',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 76');
    	$scope.test = TestService.getTest()
    }]);
});
