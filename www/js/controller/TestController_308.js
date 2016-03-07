define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_308',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 308');
    	$scope.test = TestService.getTest()
    }]);
});
