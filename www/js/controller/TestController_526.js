define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_526',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 526');
    	$scope.test = TestService.getTest()
    }]);
});
