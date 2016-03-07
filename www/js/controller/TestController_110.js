define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_110',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 110');
    	$scope.test = TestService.getTest()
    }]);
});
