define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_133',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 133');
    	$scope.test = TestService.getTest()
    }]);
});
