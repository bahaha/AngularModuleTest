define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_15',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 15');
    	$scope.test = TestService.getTest()
    }]);
});
