define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_841',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 841');
    	$scope.test = TestService.getTest()
    }]);
});
