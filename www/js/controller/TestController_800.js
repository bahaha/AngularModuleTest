define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_800',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 800');
    	$scope.test = TestService.getTest()
    }]);
});
