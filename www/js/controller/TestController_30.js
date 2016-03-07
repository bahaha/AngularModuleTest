define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_30',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 30');
    	$scope.test = TestService.getTest()
    }]);
});
