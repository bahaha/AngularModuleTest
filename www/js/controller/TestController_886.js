define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_886',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 886');
    	$scope.test = TestService.getTest()
    }]);
});
