define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_748',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 748');
    	$scope.test = TestService.getTest()
    }]);
});
