define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_681',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 681');
    	$scope.test = TestService.getTest()
    }]);
});
