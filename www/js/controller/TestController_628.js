define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_628',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 628');
    	$scope.test = TestService.getTest()
    }]);
});
