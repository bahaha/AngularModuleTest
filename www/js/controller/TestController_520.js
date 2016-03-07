define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_520',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 520');
    	$scope.test = TestService.getTest()
    }]);
});
