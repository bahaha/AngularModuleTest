define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_897',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 897');
    	$scope.test = TestService.getTest()
    }]);
});
