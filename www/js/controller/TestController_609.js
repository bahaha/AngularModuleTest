define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_609',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 609');
    	$scope.test = TestService.getTest()
    }]);
});
