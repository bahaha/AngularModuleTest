define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_614',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 614');
    	$scope.test = TestService.getTest()
    }]);
});
