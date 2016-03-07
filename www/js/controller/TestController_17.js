define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_17',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 17');
    	$scope.test = TestService.getTest()
    }]);
});
