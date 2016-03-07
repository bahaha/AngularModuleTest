define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_573',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 573');
    	$scope.test = TestService.getTest()
    }]);
});
