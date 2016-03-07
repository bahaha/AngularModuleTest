define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_798',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 798');
    	$scope.test = TestService.getTest()
    }]);
});
