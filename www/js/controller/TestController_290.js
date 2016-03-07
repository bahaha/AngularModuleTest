define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_290',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 290');
    	$scope.test = TestService.getTest()
    }]);
});
