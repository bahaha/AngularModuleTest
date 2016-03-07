define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_846',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 846');
    	$scope.test = TestService.getTest()
    }]);
});
