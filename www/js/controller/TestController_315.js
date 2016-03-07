define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_315',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 315');
    	$scope.test = TestService.getTest()
    }]);
});
