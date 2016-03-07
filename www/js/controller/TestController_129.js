define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_129',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 129');
    	$scope.test = TestService.getTest()
    }]);
});
