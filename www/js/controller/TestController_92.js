define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_92',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 92');
    	$scope.test = TestService.getTest()
    }]);
});
