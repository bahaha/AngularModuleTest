define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_73',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 73');
    	$scope.test = TestService.getTest()
    }]);
});
