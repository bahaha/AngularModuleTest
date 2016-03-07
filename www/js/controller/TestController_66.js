define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_66',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 66');
    	$scope.test = TestService.getTest()
    }]);
});
