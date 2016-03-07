define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_102',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 102');
    	$scope.test = TestService.getTest()
    }]);
});
