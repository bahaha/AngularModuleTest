define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_883',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 883');
    	$scope.test = TestService.getTest()
    }]);
});
