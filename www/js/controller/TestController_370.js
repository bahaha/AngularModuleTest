define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_370',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 370');
    	$scope.test = TestService.getTest()
    }]);
});
