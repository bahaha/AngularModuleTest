define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_898',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 898');
    	$scope.test = TestService.getTest()
    }]);
});
