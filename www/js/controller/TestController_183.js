define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_183',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 183');
    	$scope.test = TestService.getTest()
    }]);
});
