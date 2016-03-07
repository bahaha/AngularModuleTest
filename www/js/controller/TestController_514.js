define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_514',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 514');
    	$scope.test = TestService.getTest()
    }]);
});
