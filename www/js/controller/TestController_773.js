define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_773',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 773');
    	$scope.test = TestService.getTest()
    }]);
});
