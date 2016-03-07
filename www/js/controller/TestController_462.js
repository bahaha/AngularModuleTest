define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_462',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 462');
    	$scope.test = TestService.getTest()
    }]);
});
