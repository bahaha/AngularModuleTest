define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_606',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 606');
    	$scope.test = TestService.getTest()
    }]);
});
