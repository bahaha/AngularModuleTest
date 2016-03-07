define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_511',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 511');
    	$scope.test = TestService.getTest()
    }]);
});
