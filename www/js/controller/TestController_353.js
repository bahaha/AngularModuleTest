define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_353',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 353');
    	$scope.test = TestService.getTest()
    }]);
});
