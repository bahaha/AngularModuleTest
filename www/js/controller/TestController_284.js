define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_284',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 284');
    	$scope.test = TestService.getTest()
    }]);
});
