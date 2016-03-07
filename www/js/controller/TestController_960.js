define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_960',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 960');
    	$scope.test = TestService.getTest()
    }]);
});
