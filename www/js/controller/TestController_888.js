define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_888',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 888');
    	$scope.test = TestService.getTest()
    }]);
});
