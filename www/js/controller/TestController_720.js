define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_720',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 720');
    	$scope.test = TestService.getTest()
    }]);
});
