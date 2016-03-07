define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_828',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 828');
    	$scope.test = TestService.getTest()
    }]);
});
