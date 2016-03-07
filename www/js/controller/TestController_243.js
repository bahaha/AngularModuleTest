define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_243',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 243');
    	$scope.test = TestService.getTest()
    }]);
});
