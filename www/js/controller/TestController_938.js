define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_938',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 938');
    	$scope.test = TestService.getTest()
    }]);
});
