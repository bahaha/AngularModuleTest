define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_587',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 587');
    	$scope.test = TestService.getTest()
    }]);
});
