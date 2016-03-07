define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_653',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 653');
    	$scope.test = TestService.getTest()
    }]);
});
