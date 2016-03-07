define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_280',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 280');
    	$scope.test = TestService.getTest()
    }]);
});
