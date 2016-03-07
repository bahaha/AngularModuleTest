define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_188',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 188');
    	$scope.test = TestService.getTest()
    }]);
});
