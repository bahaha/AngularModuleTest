define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_33',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 33');
    	$scope.test = TestService.getTest()
    }]);
});
