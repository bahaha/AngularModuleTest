define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_109',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 109');
    	$scope.test = TestService.getTest()
    }]);
});
