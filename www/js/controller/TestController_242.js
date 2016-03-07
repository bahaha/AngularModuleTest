define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_242',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 242');
    	$scope.test = TestService.getTest()
    }]);
});
