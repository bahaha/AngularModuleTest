define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_907',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 907');
    	$scope.test = TestService.getTest()
    }]);
});
