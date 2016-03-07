define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_134',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 134');
    	$scope.test = TestService.getTest()
    }]);
});
