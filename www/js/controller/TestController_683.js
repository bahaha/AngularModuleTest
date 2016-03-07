define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_683',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 683');
    	$scope.test = TestService.getTest()
    }]);
});
