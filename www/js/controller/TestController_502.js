define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_502',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 502');
    	$scope.test = TestService.getTest()
    }]);
});
