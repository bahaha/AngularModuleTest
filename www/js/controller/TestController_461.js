define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_461',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 461');
    	$scope.test = TestService.getTest()
    }]);
});
