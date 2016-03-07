define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_221',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 221');
    	$scope.test = TestService.getTest()
    }]);
});
