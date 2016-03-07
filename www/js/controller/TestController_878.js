define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_878',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 878');
    	$scope.test = TestService.getTest()
    }]);
});
