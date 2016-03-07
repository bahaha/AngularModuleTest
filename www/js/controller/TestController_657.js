define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_657',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 657');
    	$scope.test = TestService.getTest()
    }]);
});
