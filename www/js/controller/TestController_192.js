define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_192',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 192');
    	$scope.test = TestService.getTest()
    }]);
});
