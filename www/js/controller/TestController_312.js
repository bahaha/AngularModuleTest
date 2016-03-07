define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_312',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 312');
    	$scope.test = TestService.getTest()
    }]);
});
