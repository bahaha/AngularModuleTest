define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_947',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 947');
    	$scope.test = TestService.getTest()
    }]);
});
