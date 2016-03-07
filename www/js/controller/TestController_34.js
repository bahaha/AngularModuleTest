define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_34',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 34');
    	$scope.test = TestService.getTest()
    }]);
});
