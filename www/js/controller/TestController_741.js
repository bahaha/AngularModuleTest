define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_741',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 741');
    	$scope.test = TestService.getTest()
    }]);
});
