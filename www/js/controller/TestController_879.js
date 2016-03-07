define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_879',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 879');
    	$scope.test = TestService.getTest()
    }]);
});
