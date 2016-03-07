define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_671',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 671');
    	$scope.test = TestService.getTest()
    }]);
});
