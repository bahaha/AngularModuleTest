define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_142',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 142');
    	$scope.test = TestService.getTest()
    }]);
});
