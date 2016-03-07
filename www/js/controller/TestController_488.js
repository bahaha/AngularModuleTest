define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_488',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 488');
    	$scope.test = TestService.getTest()
    }]);
});
