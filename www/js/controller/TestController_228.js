define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_228',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 228');
    	$scope.test = TestService.getTest()
    }]);
});
