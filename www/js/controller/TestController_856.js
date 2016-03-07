define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_856',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 856');
    	$scope.test = TestService.getTest()
    }]);
});
