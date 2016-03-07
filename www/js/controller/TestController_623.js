define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_623',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 623');
    	$scope.test = TestService.getTest()
    }]);
});
