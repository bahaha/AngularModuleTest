define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_986',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 986');
    	$scope.test = TestService.getTest()
    }]);
});
