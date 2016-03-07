define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_226',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 226');
    	$scope.test = TestService.getTest()
    }]);
});
